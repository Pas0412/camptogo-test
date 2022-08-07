import { createApp } from 'vue';
import store from './vuex/store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import Vuex from 'vuex';

const app = createApp(App)

app.use(store)
app.use(ElementPlus)
app.mount('#app')
app.use(Vuex)
