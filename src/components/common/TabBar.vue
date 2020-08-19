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
          {{ tab.name }}
        </div>
      </div>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props: {
    tabList: Array,
    tabIndex: Number
  },
  data() {
    return {};
  },
  methods: {
    changeTab: function(tab) {
      this.$emit("changeTab", tab);
    }
  }
};
</script>

<style lang="scss" scoped>
.my-tabs {
  font-size: 14px;
  color: #444;
  margin-top: 20px;
  background: #fff;
}
.tabs-bar {
  position: relative;
  padding: 5px 0;
}
.tabs-bar-nav {
  display: inline-block;
  width: 100%;
}
.tabs-tab {
  padding: 5px 0;
  position: relative;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  width: 25%;
}
.tabs-active {
  border-bottom: 1px solid #007dff;
  color: #007dff;
}
.tabs-content {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
}
</style>
