import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        posts: {},
        fulfilled: false,
    },

    actions: {
        async fetchArticles({state,commit}) {
            const defPosts = Object.values(state.posts).filter( i => !i.error && i.type === 'article');
            if(state.fulfilled){
                return defPosts;
            }
            try{
                const res =  await axios.get(`${import.meta.env.VITE_ARTICLE_API_HOST}/articles`);
                if(res && res.status === 200 ){
                    for( const item of res.data){
                        commit('addPost',item);
                    }
                }
                state.fulfilled = true;
                return res.data;
            }catch {}

            return defPosts;
        },
        async fetchPost({state,commit}, {type = 'article', id = ''} ) {
            if(state.posts[`${type}_${id || 1}`]){

                return state.posts[`${type}_${id || 1}`];
            }
            let data = {type,id : id || 1, error: true};

            try{
                const res =  await axios.get(`${import.meta.env.VITE_ARTICLE_API_HOST}/${type}/${id}`);

                if(res && res.status === 200 ){
                    data = res.data;
                }
            }catch {}
            commit('addPost',data);

            return data;
        }
    },

    mutations: {
        async addPost(state, post) {
            state.posts[`${post.type}_${post.id}`] = post
        }
    }
})
