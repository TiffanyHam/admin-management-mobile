<template>
  <button :class="`btn btn-${type}`" @click="clickEvent">测试按钮</button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    type: {
      type: String,
      default: "normal"
    },
    clickEvent: {
      type: Function
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 0 16px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #333333;
  &-warning {
    color: #ffffff;
    background-color: #ffae00;
  }
  &-danger {
    color: #ffffff;
    background-color: red;
  }
}
</style>
