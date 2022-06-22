<template>
  <div
    class="topBarContent"
    :style="style"
    style="line-height: 54px; font-size: 15px;text-align: center;
}"
  >
    <van-nav-bar
      style="border-bottom: 1px solid #eee;
    margin-bottom: 10px;
}"
      title="用户主页"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="weapp-nav" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from 'vuex'
export default defineComponent({
  name: "TopBarDetail",
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      num: 1,
      indexback:false,
      indexData:0,
      store : useStore()
    };
  },
  watch: {
    index(newvalue, oldvalue) {
     this.indexData = newvalue
    },
  },
  created() {
    let width = document.documentElement.clientWidth;
    let height = 54;
    this.width = width;
    this.height = height;
    this.style = { width: width + "px", height: height + "px" };
  },
  methods: {
    onClickLeft(val) {
      console.log(val);
      this.indexback = true
      this.imgDetailFlag = false
      this.store.commit("updateback", this.indexback);
      console.log(this.store.state.indexback)
    //   this.indexback = !this.indexback
    //  this.$emit("indexmeth",this.indexback)
    // console.log(this.indexData)
    //    this.$emit("indexmeth",this.indexData)
      // this.$router.push({
      //   path:'/home',
      //   query:{
      //     index:this.index
      //   }
      // })
    },
    onClickRight(val) {
      console.log(val);
    },
  },
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