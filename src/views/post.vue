<template>
  <div class="view" v-if="!post.error || loading">
  <div class="post">
    <m-image :loading="loading" :src="post.src || '/image-404.png'" ratio="16x9" />
    <m-heading :loading="loading" :title="post.title"></m-heading>
    <m-author :loading="loading" :name="post.author" />

    <m-content :loading="loading" :class="{'-restricted': hasData && restricted }">
      {{content}}
      <div v-if="hasData && restricted" class="paid-block">
        <m-button :processing="processingAccess" @click.native="buyAccess">Read the entire article for free by clicking here</m-button>
      </div>
    </m-content>
  </div>
  <m-list :items="list" :loading="loading" header="All articles" class="other" />
  </div>
  <div class="error" v-else>
    <m-heading :level="3" title="Cannot get data"></m-heading>
    <m-content><a href="#" @click="loadData" title="Reload page">Reload page</a>  or contact support team.</m-content>
  </div>
</template>

<script>
import MHeading from '../components/mHeading/mHeading.vue'
import MContent from '../components/mContent/mContent.vue'
import MImage from '../components/mImage/mImage.vue';
import MItem from '../components/mItem/mItem.vue';
import MList from "../components/mList/mList.vue";
import MAuthor from "../components/mAuthor/mAuthor.vue";
import MButton from "../components/mButton/mButton.vue";

export default {
  components: {
    MButton,
    MAuthor,
    MList,
    MImage,
    MContent,
    MHeading,
    MItem
  },
  props: {
    type: {
      type: String,
      required: false,
      default: null
    }
  },
  data(){
    return {
      loading: true,
      processingAccess: false,
    }
  },
  watch: {
    async $route(to, from) {
      window.scrollTo(0, 0);
      await this.loadData();
    },
  },

  async beforeMount() {
    await this.loadData();
  },
  methods: {
    async loadData(){
      this.loading = true;

      await this.$store.dispatch('fetchArticles');
      await this.$store.dispatch('fetchPost', {type: this.type, id: this.$route.params.id});
      this.loading = false;
    },
    buyAccess() {
      this.processingAccess = true;
      this.$store.commit('addPost', {...this.post, paid: true});
      this.processingAccess = false;
    },
  },
  computed:{
    restricted(){
      return !this.post.free && !this.post.paid;
    },
    list(){
      return Object.values(this.$store.state.posts || {}).filter( i => !i.error && i.type === 'article');
    },
    post(){
      return this.$store.state.posts[`${this.type}_${this.$route.params.id || 1}`] || {};
    },
    hasData(){
      return !!Object.keys(this.post).length;
    },
    content(){
      if(this.post.content) {
        if (!!this.post.free) {
          return this.post.content;
        } else {
          const indexEnd = this.post.content.split(/[., ]+/).slice(0, 20).join(' ').length;
          return this.post.content.substring(0, indexEnd).concat(this.post.content.length > indexEnd ? '...' : '');
        }
      }

      return '';
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  .m-content {
    position: relative;
    &.-restricted {
      min-height: 200px;
    }
    .paid-block {
      min-height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgb(255,255,255);
      background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4416141456582633) 100%);
    }
  }
}
.other {
  margin-top: 60px;
}
.error{
  display: flex;
  min-height: 300px;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}
</style>
