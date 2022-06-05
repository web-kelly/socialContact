<template>
  <div class="login-containt">
    <Header>
      <van-sticky>
        <TopBar />
      </van-sticky>
    </Header>
    <Content :style="{ height: contentHeight + 'px', overflow: 'auto' }">
      <FirstHint v-if="HintFlag&&!flag" @getFirstFlag="FirstFlag" />
      <MatCh v-if="flag" @getMachFlag="MachFlag" />

      <SwiPe v-else />
    </Content>

    <NavBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import LoginByIntro from "@/components/LoginByIntro.vue";
// import { ref } from "vue";
import NavBar from "components/global/NavBar.vue";
import TopBar from "components/global/TopBar.vue";
import MatCh from "components/global/MatCh.vue";
import SwiPe from "components/global/SwiPe.vue";
import FirstHint from "components/global/FirstHint.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
    TopBar,
    MatCh,
    SwiPe,
    FirstHint,
  },

  data() {
    return {
      //首次登录出现提示
      HintFlag: true,
      flag: true,
      contentHeight: 0, // 中部内容高度
    };
  },
  created() {
    this.getContentHeight();
  },

  methods: {
    getContentHeight() {
      this.contentHeight = document.documentElement.clientHeight - 104; //内部content高度
    },
    MachFlag(val: any) {
      this.flag = val;
      console.log(val);
    },
    FirstFlag(val: any) {
      this.HintFlag = val;
      console.log(val);
    },
  },
});
</script>
<style scoped lang="scss">
</style>
