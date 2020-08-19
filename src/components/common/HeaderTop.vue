<template>
  <div class="header">
    <!-- 返回箭头 -->
    <div class="header_arrow" @click="getBack">
      <slot name="header_arrow">
        <img src="@/assets/image/back.png" alt="" slot="header_arrow" />
      </slot>
    </div>
    <!-- 中间标题问题 -->
    <div class="header_title">
      <slot name="header_title">
        <span>{{ title }}</span>
      </slot>
    </div>
    <!-- 点击事件 -->
    <div class="header_setting" @click="setProper">
      <slot name="header_setting">
        <img :src="imgSrc" alt="" slot="header_setting" />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String
    },
    imgSrc: {
      type: String
    }
  },
  methods: {
    // 返回上一页
    getBack() {
      this.$router.back(-1);
    },
    setProper(event) {
      this.$emit("operation", event);
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
// 左中右布局, 直接给中间的盒子设置flex:1;
.header .header_title {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #333;
  font-weight: 700;
}
.header_arrow {
  width: 5%;
  margin-left: 15px;
}
.header_arrow img {
  vertical-align: middle;
}
.header_icon {
  width: 20%;
  font-size: 14px;
  color: #115ffb;
}
</style>
