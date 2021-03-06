import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import leftMenu from './layout/left-menu';
import topHeader from './layout/top-header';

Vue.config.productionTip = false;
Vue.component('leftMenu',leftMenu);
Vue.component('topHeader',topHeader);
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
