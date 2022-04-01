<<<<<<< HEAD
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.prototype.$ajax = axios

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 一定要注入到vue的实例对象上
  router,
  components: { App },
  template: '<App/>'
})
=======
import Vue from 'vue';
import App from './App.vue';
// import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
>>>>>>> df4767e17f27d3c215d1fc485ffdacf14c69844b
