<template>
  <div
    class="topBarContent"
    :style="style"
    style="line-height: 54px; font-size: 15px;text-align: center;
}"
  >
    <button :class="num == 1 ? 'active' : ''" @click="num = 1">推荐</button>
    <button :class="num == 2 ? 'active' : ''" @click="num = 2">动态</button>

    <!-- 根据num动态切换显示div内容 -->
    <!-- <div v-show="num == 1">html内容</div> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TopBar",
  props: {
    // isShowNameDialog: {
    //   type: Boolean,
    //   default: false,
    // },
  },

  data() {
    return {
      num: 1,
    };
  },
  watch: {
    // isShowNameDialog(newvalue, oldvalue) {
    //   if (newvalue == !oldvalue) {
    //     this.show = true;
    //   }
    // },
  },
  created() {
    let width = document.documentElement.clientWidth;
    let height = 54;
    this.width = width;
    this.height = height;
    this.style = { width: width + "px", height: height + "px" };
  },
  methods: {},
});
</script>
<style scoped lang="scss">
.active {
  color: #ff5a3d;
  border-bottom: 0.1rem solid red;
  line-height: 0.8rem;
  font-size: 0.4rem;
  font-weight: bold;
}
.topBarContent {
  position: relative;
  z-index: 99;
  background: #fff;
}
button {
  margin: 0;
  border: none;
  margin: 0;
  background: none;
  padding: 0;
  margin-right: 0.4rem;
}
</style>