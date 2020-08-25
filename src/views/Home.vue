<template>
  <div class="home">
    <!-- Header -->
    <!-- <v-header
      pageName="清易扫地机机器人"
      :iconUrl="iconUrl"
      @operation="getProper"
      :hasIcon="true"
    >
    </v-header> -->
    <v-header
      pageName="清易扫地机机器人"
      :iconUrl="iconUrl"
      @operation="getProper"
      :hasIcon="true"
    ></v-header>

    <!-- Tabs -->
    <v-tab :tabList="tabList" :tabIndex="tabIndex" @changeTab="changeTab">
      <!-- <keep-alive>
        <component :is="currentContent"> </component>
      </keep-alive> -->
    </v-tab>
    <!-- module -->
    <v-module
      leftTitle="地图保存（Beta）"
      rightBtnText="保存"
      text="机器人可自动保存地图并分区，您可以进行地图管理等相关功能"
    >
    </v-module>
    <!--button -->
    <v-button type="warning" :clickEvent="clickEvent"></v-button>
    <!-- Dialog -->
    <v-dialog
      dialogContent="充电座在禁区/虚拟墙内，继续保存可能无法回充"
      leftBtnText="不保存"
      rightBtnText="保存"
      :showDialog="dialog"
      :leftBtnEvent="leftBtnEvent"
      :rightBtnEvent="rightBtnEvent"
    ></v-dialog>
  </div>
</template>

<script>
import { info, tabConstant } from "@/api/index";
// @ is an alias to /src
//import vHeader from "@/components/common/HeaderTop";
//import vTab from "@/components/common/TabBar";
// import One from "@/components/One";
// import Two from "@/components/Two";
// import Three from "@/components/Three";
// import Four from "@/components/Four";

export default {
  name: "Home",
  //   components: {
  //     vHeader,
  //     vTab
  //     // one: One,
  //     // two: Two,
  //     // three: Three,
  //     // four: Four
  //   },
  data() {
    return {
      iconUrl: "",
      dialog: false,
      tabIndex: 0,
      tabList: []
      //currentContent: "one",
      //   tabList: [
      //     {
      //       index: 0,
      //       name: "滤网"
      //       //   component: "one"
      //     },
      //     {
      //       index: 1,
      //       name: "边刷"
      //       //   component: "two"
      //     },
      //     {
      //       index: 2,
      //       name: "中刷"
      //       //  component: "three"
      //     },
      //     {
      //       index: 3,
      //       name: "传感器"
      //       // component: "four"
      //     }
      //   ]
    };
  },
  created() {
    this.iconUrl = require("@/assets/image/setting.png");
  },
  methods: {
    //测试接口
    getMessage() {
      let that = this;
      info().then(res => {
        const { code, data = {} } = res.data;
        if (code === "D00000") {
          that.tableData = data.list;
        }
      });
    },
    //Tabs
    getTabs() {
      let that = this;
      tabConstant().then(res => {
        const { code, content = {} } = res.data;
        if (code === that.GLOBAL.CODE.SUCCESS) {
          this.tabList = content.tabsList;
        }
      });
    },
    getProper() {
      // 点击事件操作
    },
    // 切换选项卡
    changeTab(tab) {
      this.tabIndex = tab.index;
      this.currentContent = tab.component;
    },
    leftBtnEvent() {
      this.dialog = false;
    },
    rightBtnEvent() {
      this.dialog = false;
    },
    clickEvent() {
      this.dialog = true;
    }
  },
  mounted() {
    this.getTabs();
  }
};
</script>
