<template>
  <div class="login-containt">
    <Header>
      <van-sticky>
        <!-- <TopBarDetail v-if="imgDetailFlag" @indexmeth="indexDataMeth" :index="indexData" /> -->
        <TopBarDetail v-if="imgDetailFlag" />
        <TopBar v-else />
      </van-sticky>
    </Header>
    <Content :style="{ height: contentHeight + 'px', overflow: 'auto' }">
      <FirstHint v-if="HintFlag && !flag" @getFirstFlag="FirstFlag" />
      <MatCh v-if="flag" @getMachFlag="MachFlag" />

      <!-- <SwiPe v-else @imgstack="imgstackflag" :indexbackflagswp="indexbackflag"/> -->
      <SwiPe v-else @imgstack="imgstackflag" />
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
import TopBarDetail from "components/global/TopBarDetail.vue";
import MatCh from "components/global/MatCh.vue";
import SwiPe from "components/global/SwiPe.vue";
import FirstHint from "components/global/FirstHint.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
    TopBar,
    MatCh,
    SwiPe,
    FirstHint,
    TopBarDetail,
  },

  data() {
    return {
      imgDetailFlag: false,
      indexData: 0,
      indexbackflag: false,
      //首次登录出现提示
      HintFlag: true,
      flag: true,
      contentHeight: 0, // 中部内容高度
      gklflag: false,
      store: useStore(),
    };
  },
  created() {
    this.getContentHeight();
  },

  methods: {
    imgstackflag(value1: any, value2: any) {
      console.log(value1, value2);

      this.indexData = value2;
      if (this.store.state.indexback) {
        this.imgDetailFlag = false;
      } else {
        this.imgDetailFlag = value1;
      }
    },
    // indexDataMeth(val:any){
    //   console.log(val)
    //   this.indexbackflag = val
    //   if(  this.indexbackflag ){
    //     this.imgDetailFlag = false
    //     this.gklflag = true
    //   }else if(this.gklflag){
    //     this.imgDetailFlag = false
    //   }

    // },
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
