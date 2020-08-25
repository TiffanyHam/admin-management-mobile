import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible";
import "@/style/common.scss"; /*引入公共样式*/
import "@/components/index"; //使用自动注册的插件
import globalVue from "@/utils/global";

Vue.prototype.GLOBAL = globalVue; //全局常量

Vue.config.productionTip = false;

require("./mock/index.js");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
