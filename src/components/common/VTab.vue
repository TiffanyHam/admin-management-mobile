<template>
  <div class="my-tabs">
    <div class="tabs-bar">
      <div class="tabs-bar-nav">
        <div
          class="tabs-tab"
          v-for="(tab, index) in tabList"
          :key="index"
          :class="[tabIndex == tab.index ? 'tabs-active' : '']"
          @click="changeTab(tab)"
        >
          <span>{{ tab.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VTab",
  props: {
    tabList: Array,
    tabIndex: Number
  },
  data() {
    return {};
  },
  methods: {
    changeTab(tab) {
      this.$emit("changeTab", tab);
    }
  }
};
</script>

<style lang="scss" scoped>
.my-tabs {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  background: #fff;
  height: 50px;
  line-height: 50px;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
}
// .tabs-bar {
//   position: relative;
//   padding: 5px 0;
// }
.tabs-bar-nav {
  display: inline-block;
}
.tabs-tab {
  // padding: 5px 0;
  position: relative;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  width: 70px;
}
.tabs-active {
  color: #007dff;
}
.tabs-active span {
  border-bottom: 1px solid #007dff;
  padding-bottom: 10px;
}
</style>
