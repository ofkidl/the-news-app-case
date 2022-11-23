import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "../store";
import '../styles/style.css'
import router from "../router";
import NewsApp from './NewsApp.vue'
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(NewsApp);
app.use(VueAxios, axios);
app.use(store);
app.use(router);
app.use(VueLazyLoad, {
    loading: '',
    error: '~/image-404.png',
});
app.mount('#news-app');
