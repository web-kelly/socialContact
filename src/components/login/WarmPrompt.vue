<template>
  <div class="warmprompt-contant">
    <van-dialog
      cancelButtonText="不同意"
      confirmButtonText="同意"
      v-model:show="show"
      title="温馨提示"
      @cancel="show = false"
      :before-close="onBeforeClose"
      @confirm="getLoginDialog"
      show-cancel-button
    >
      <div style="height: 360px; overflow-y: scroll">
        <van-notice-bar
          wrapable
          :scrollable="false"
          text="不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会不会回头的东西有四件：说出不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会口的话、离弦的箭、不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会逝去的生活和失去的机会不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。"
        />
      </div>
    </van-dialog>
    <van-action-sheet
      v-model:show="getLoginDialogFlag"
      title="申请获取微信公开信息"
      cancel-text="允许"
      @cancel="getNextInfo"
    >
      <div class="content">
        <img src="../../assets/images/weixin.png" alt="" />
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import { defineComponent } from "vue";
// import { ref } from 'vue';
export default defineComponent({
  name: "WarmPrompt",
  props: {
    isShowNameDialog: {
      //是否显示弹框
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
      getLoginDialogFlag: false,
      loginFlg:true,
    };
  },
  watch: {
    isShowNameDialog(newvalue, oldvalue) {
      if (newvalue == !oldvalue) {
        this.show = true;
      }
    },
  },
  methods: {
    onBeforeClose() {
      this.getLoginDialogFlag = true;
    },
    getNextInfo(){
      this.$router.push({
        path:"/SexSelect",
        query:{

        }
      })
    }

  },
});
</script>
<style scoped lang="scss">
.content {
  margin: 35px 0;
}
</style>