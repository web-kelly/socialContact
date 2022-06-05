<template>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000;">
      <van-tabbar-item icon="home-o">推荐</van-tabbar-item>
      <van-tabbar-item icon="search">发现</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5">消息</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="5">我的</van-tabbar-item>
    </van-tabbar>
 
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBar",
  props: {
    // isShowNameDialog: {
    //   type: Boolean,
    //   default: false,
    // },
  },

  data() {
    return {
      active :0,
    };
  },
  watch: {
    // isShowNameDialog(newvalue, oldvalue) {
    //   if (newvalue == !oldvalue) {
    //     this.show = true;
    //   }
    // },
  },
  methods: {},
});
</script>
<style scoped lang="scss">
// .navBarContent{
// height: 100px;
// width: 20px;
// background: red;
// }
</style>