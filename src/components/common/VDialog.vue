<template>
  <div class="model_dialog" v-show="showDialog">
    <div class="dialog_content">
      <div class="dialog_text">{{ dialogContent }}</div>
      <div class="dialog_button">
        <div class="left_button" @click="leftBtnEvent">{{ leftBtnText }}</div>
        <div class="right_button" @click="rightBtnEvent">
          {{ rightBtnText }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VDialog",
  /**
   *页面弹窗需要接收的参数
   *
   *@param {String} dialogContent 弹窗内容
   *@param {Boolean} showDialog 是否显示弹窗
   *@param {String} leftBtnText 弹窗左边按钮文字
   *@param {String} rightBtnText 弹窗右边按钮文字
   *@param {Function} leftBtnEvent 弹窗左边按钮事件
   *@param {Function} rightBtnEvent 弹窗右边按钮事件
   *
   */
  data() {
    return {};
  },
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    dialogContent: {
      type: String,
      default: ""
    },
    leftBtnText: {
      type: String,
      default: ""
    },
    rightBtnText: {
      type: String,
      default: ""
    },
    leftBtnEvent: {
      type: Function
    },
    rightBtnEvent: {
      type: Function
    }
  }
};
</script>
<style lang="scss" scoped>
.model_dialog {
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
}
.active {
  visibility: visible;
}
.dialog_content {
  background: #fff;
  font-size: 14px;
  padding: 15px 20px 5px 20px;
  margin: 10px 15px;
  position: absolute;
  bottom: 0;
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.8);
}
.dialog_text {
  margin-bottom: 30px;
  height: 20px;
  line-height: 20px;
}
.dialog_button {
  display: flex;
  height: 50px;
  line-height: 50px;
  color: #007dff;
}
.left_button,
.right_button {
  flex: 1;
}
</style>
