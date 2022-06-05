<template>
  <van-overlay :show="show" @click="get()" :custom-style="{ background: 'rgba(255,255,255,1)',zIndex:1001 }">
    <div class="wrapper">
      <div class="heart">
        <span class="left"></span>
        <span class="right"></span>
        <span class="bottom"></span>
      </div>
      <div
        style="position: fixed; padding-top: 79px;  font-size: 16px"
      >
        匹配中……
      </div>
    </div>
  </van-overlay>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MatCh",
  props: {
    // isShowNameDialog: {
    //   type: Boolean,
    //   default: false,
    // },
  },

  data() {
    return {
      show: true,
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
    get(){
      this.show = false;
      //  this.$toast("匹配成功");
       this.$emit('getMachFlag',false)
      // this.$Toast('匹配成功');
    }
  },
});
</script>
<style scoped lang="scss">
.heart {
  width: 200px;
  height: 200px;
  margin: 100px auto;
  position: relative;
  bottom: 15%;
}

.left {
  width: 200px;
  height: 200px;
  background-color: red;
  position: absolute;
  left: -70px;
}

.right {
  width: 200px;
  height: 200px;
  background-color: red;
  position: absolute;
  right: -94px;
}

.bottom {
  width: 200px;
  height: 200px;
  background-color: red;
  position: absolute;
  bottom: -80px;
  left: 12px;
}

.left,
.right {
  border-radius: 100px;
}

.left,
.right,
.bottom {
  animation: move 1s infinite;
}

@keyframes move {
  0% {
    transform: scale(1) rotate(45deg);
  }

  50% {
    transform: scale(1.2) rotate(45deg);
  }

  100% {
    transform: scale(1) rotate(45deg);
  }
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>