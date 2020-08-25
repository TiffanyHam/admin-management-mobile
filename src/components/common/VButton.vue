<template>
  <div :class="`btn btn-${type}`" @click="clickEvent">{{ btnText }}</div>
</template>

<script>
export default {
  name: "VButton",
  props: {
    btnText: {
      type: String
    },
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
  width: 160px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  border-radius: 30px;
  margin: 0 auto;
  color: #007dff;
  &-primary {
    background: rgb(0, 0, 0, 0.05);
  }
  &-others {
    background: rgb(0, 0, 0, 0.5);
  }
}
</style>
