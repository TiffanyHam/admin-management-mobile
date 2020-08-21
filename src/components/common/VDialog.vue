<template>
  <div class="model_dialog" v-show="showDialog">
    <div class="dialog_content">
      <div class="dialog_text">{{ text }}</div>
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
  data() {
    return {};
  },
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    text: {
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
  },
  methods: {},
  mounted() {
    //  this.leftBtnEvent();
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
  //visibility: hidden;
  //pointer-events: none;
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
