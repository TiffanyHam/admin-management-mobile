import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible";
import "@/style/common.scss"; /*引入公共样式*/
import MyComponent from "@/components/index";
Vue.use(MyComponent); //使用自动注册的插件

//Vue.use(HeaderTop);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
