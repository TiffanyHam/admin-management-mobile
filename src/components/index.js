// 自定义组件
const requireComponents = require.context("./common", false, /\.vue$/);

//console.log(requireComponents.prototype);

function toFirstUpper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const install = Vue => {
  // requireComponents.keys()----["./VButton.vue"]
  requireComponents.keys().forEach(filename => {
    const componentConfig = requireComponents(filename); // 组件实例
    // filename ---- ./VButton.vue
    // 进行转化得到 VButton,另外防止有小写，进行首字母转化
    const componentName = toFirstUpper(
      filename.replace(/\.\//, "").replace(/\.\w+$/, "")
    );
    // 全局注册组件
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};
// 确保是正常环境
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install
};
