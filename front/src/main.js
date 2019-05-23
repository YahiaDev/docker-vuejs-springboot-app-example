import Vue from 'vue';
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/home';



Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [

  { name: 'home', path: '/home', component: Home},
  { path: '*', redirect: '/home' }
  
];

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
