// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import ElementUI from 'element-ui';
import HappyScroll from 'vue-happy-scroll';

import 'element-ui/lib/theme-chalk/index.css';//elementUI的样式文件要单独引入
import 'vue-happy-scroll/docs/happy-scroll.css'//HappyScroll的样式文件要单独引入

import '../src/assets/css/global.scss';//引入公共css样式
import '../src/assets/js/config.js';//引入公共js样式

import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(HappyScroll);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
