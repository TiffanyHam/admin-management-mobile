<template>
  <div class="home">
    <v-header title="清易扫地机机器人" :imgSrc="imgUrl" @operation="getProper">
    </v-header>
    <!-- Tabs -->
    <v-tab :tabList="tabList" :tabIndex="tabIndex" @changeTab="changeTab">
      <keep-alive>
        <component :is="currentContent"> </component>
      </keep-alive>
    </v-tab>
  </div>
</template>

<script>
// @ is an alias to /src
import vHeader from "@/components/common/HeaderTop";
import vTab from "@/components/common/TabBar";
import One from "@/components/One";
import Two from "@/components/Two";
import Three from "@/components/Three";
import Four from "@/components/Four";

export default {
  name: "Home",
  components: {
    vHeader,
    vTab,
    one: One,
    two: Two,
    three: Three,
    four: Four
  },
  data() {
    return {
      imgUrl: "",
      tabIndex: 0,
      currentContent: "one",
      tabList: [
        {
          index: 0,
          name: "滤网",
          component: "one"
        },
        {
          index: 1,
          name: "边刷",
          component: "two"
        },
        {
          index: 2,
          name: "中刷",
          component: "three"
        },
        {
          index: 3,
          name: "传感器",
          component: "four"
        }
      ]
    };
  },
  created() {
    this.imgUrl = require("@/assets/image/setting.png");
  },
  methods: {
    getProper() {
      // 点击事件操作
    },
    // 切换选项卡
    changeTab: function(tab) {
      this.tabIndex = tab.index;
      this.currentContent = tab.component;
    }
  }
};
</script>

<style lang="scss"></style>
