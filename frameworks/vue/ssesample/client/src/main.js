import '@babel/polyfill'
import Vue from 'vue'
import VueSSE from 'vue-sse';
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './storage/index';
import vuemoment from 'vue-moment';
import injector from 'vue-inject';

// app_start will load anything that can be injected into your application
require('./start/app_start');

Vue.config.productionTip = false

Vue.use(injector);
Vue.use(VueSSE);
Vue.use(vuemoment);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
