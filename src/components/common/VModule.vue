<template>
  <div class="module_content">
    <div class="module_part">
      <div class="left_part">{{ leftTitle }}</div>
      <div class="right_part">
        <img src="@/assets/image/open_button.png" alt="" />
      </div>
    </div>
    <div class="module_text">{{ text }}</div>
  </div>
</template>
<script>
export default {
  name: "VDialog",
  data() {
    return {};
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    leftTitle: {
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
      //   default() {
      //     return function() {};
      //   }
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.module_content {
  background: #fff;
  font-size: 14px;
  padding: 15px 20px 5px 20px;
  width: 300px;
  margin: 0 auto;
  margin-top: 15px;
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.8);
}
.module_text {
  margin-bottom: 30px;
  height: 20px;
  line-height: 20px;
  text-align: left;
  color: rgba(0, 0, 0, 0.6);
}
.module_part {
  display: flex;
  height: 50px;
  line-height: 50px;
}
.left_part,
.right_part {
  flex: 1;
}
.left_part {
  text-align: left;
}
.right_part {
  text-align: right;
}
</style>
