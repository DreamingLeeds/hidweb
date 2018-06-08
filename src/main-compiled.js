// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css'; //elementUI的样式文件要单独引入

import '../static/css/global.scss'; //引入公共css样式
import '../static/js/config.js'; //引入公共js样式

import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App: App },
  template: '<App/>'
});

//# sourceMappingURL=main-compiled.js.map