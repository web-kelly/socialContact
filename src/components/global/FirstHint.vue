<template>
  <van-overlay
    :show="show"
    @click="get()"
    :custom-style="{ background: 'rgba(0,0,0,0.9)' ,zIndex:1002}"
  >
    <div class="wrapper">
      <van-image
        width="100"
        height="100"
        :src="src"
        style="position: fixed; bottom: 52%"
      />
      <div style="position: fixed; color: #fff; text-align: center">
        <h1 style="margin: 0; font-size: 14px;font-weight: normal">右滑表示<span style="color:#ee0a24">喜欢</span></h1>
        <h2 style="margin: 0; font-size: 12px; font-weight: normal">
          喜欢过的人会收藏在，“我的喜欢”中
        </h2>
      </div>
    </div>
  </van-overlay>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "FirstHint",
  props: {
    // isShowNameDialog: {
    //   type: Boolean,
    //   default: false,
    // },
  },

  data() {
    return {
      show: true,
      src: require("assets/images/shoushirigh.png"),
    };
  },
  watch: {
    // isShowNameDialog(newvalue, oldvalue) {
    //   if (newvalue == !oldvalue) {
    //     this.show = true;
    //   }
    // },
  },

  methods: {
    get() {
      this.show = false;
      // this.$toast("匹配成功");
      this.$emit("getFirstFlag", false);
      // this.$Toast('匹配成功');
    },
  },
});
</script>
<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>