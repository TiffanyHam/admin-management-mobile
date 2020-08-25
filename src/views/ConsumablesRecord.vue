<template>
  <div class="records">
    <!-- Header -->
    <v-header
      pageName="清易扫地机机器人"
      :iconUrl="iconUrl"
      :hasIcon="true"
      :settingEvent="settingEvent"
    ></v-header>

    <!-- Tabs -->
    <v-tab :tabList="tabList" :tabIndex="tabIndex" @changeTab="changeTab">
    </v-tab>
    <div class="sieve">
      <div v-if="tabIndex === 0">
        <img src="@/assets/image/zhongshua.png" alt="" />
      </div>
      <div v-if="tabIndex === 1">
        <img src="@/assets/image/bianshua.png" alt="" />
      </div>
      <div v-if="tabIndex === 2">
        <img src="@/assets/image/chuanganqi.png" alt="" />
      </div>
      <div v-if="tabIndex === 3">
        <img src="@/assets/image/zhongshua.png" alt="" />
      </div>
    </div>
    <div class="sieve_text">
      <p>{{ tabname }}剩余情况</p>
      <p>87<span>%</span></p>
      <p>{{ tabname }}性能完好，可以继续使用</p>
    </div>
    <div class="sieve_btn">添加</div>
  </div>
</template>
<script>
import { tabConstant } from "@/api/index";

export default {
  data() {
    return {
      tabIndex: 0,
      tabname: "滤网",
      tabList: [],
      iconUrl: ""
    };
  },
  methods: {
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
    // 切换选项卡
    changeTab(tab) {
      this.tabIndex = tab.index;
      this.tabname = tab.name;
    },
    settingEvent() {}
  },
  created() {
    this.iconUrl = require("@/assets/image/setting.png");
  },
  mounted() {
    this.getTabs();
  }
};
</script>
<style lang="scss" scoped>
.sieve {
  div {
    margin: 130px 0 52px 0;
  }
  img {
    width: 200px;
    height: 200px;
  }
}
.sieve_text > p:nth-child(1) {
  font-size: 16px;
  color: rgb(0, 0, 0, 0.6);
  margin-bottom: 24px;
}
.sieve_text > p:nth-child(2) {
  font-size: 45px;
  color: rgb(0, 0, 0, 0.9);
  margin-bottom: 24px;
  span {
    font-size: 18px;
  }
}
.sieve_text > p:nth-child(3) {
  font-size: 16px;
  color: rgb(0, 0, 0, 0.6);
  margin-bottom: 100px;
}
.sieve_btn {
  width: 160px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  background: rgb(0, 0, 0, 0.05);
  color: #007dff;
  border-radius: 30px;
  margin: 0 auto;
  margin-bottom: 26px;
}
</style>
