<template>
  <van-nav-bar title="" left-text="返回" left-arrow @click-left="onClickLeft" />
  <div class="SexSelect-contant">
    <div>
      <h1 class="titleText" style="font-size: 18px">您的学历为</h1>
      <div
        class="sexS"
        style="width: 70%; display: flex; flex-wrap: wrap; margin: 0 auto"
      >
        <van-button
          style="margin-right: 20px; padding: 10px 16px; margin-bottom: 20px"
          :class="changeXueLiFlag == index ? 'colored' : 'colorGrey'"
          size="small"
          v-for="(item, index) in XueLiData"
          :key="index"
          round
          type="default"
          @click="getChangeXueLi(index)"
          >{{ item }}</van-button
        >
      </div>
    </div>

    <div>
      <h1 class="titleText" style="font-size: 18px">您目前的状态是</h1>
      <div
        class="sexS"
        style="width: 70%; display: flex; flex-wrap: wrap; margin: 0 auto"
      >
        <van-button
          style="margin-right: 20px; padding: 10px 16px; margin-bottom: 20px"
          :class="zhuangtaiFlag == index ? 'colored' : 'colorGrey'"
          size="small"
          v-for="(item, index) in zhuantaiData"
          :key="index"
          round
          type="default"
          @click="getZhuTai(index)"
          >{{ item }}</van-button
        >
      </div>
    </div>
    <van-row justify="center">
      <van-col span="20"
        ><van-button
          @click="getLocation"
          :disabled="!flag01 && !flag02 ? false : true"
          type="primary"
          block
          round
          color="#ee0a24"
        >
          下一步（2/3）
        </van-button></van-col
      >
    </van-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";
// import { ref } from "vue";
export default defineComponent({
  name: "SexSelect",
  props: {
    // isShowNameDialog: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
  data() {
    return {
      changeXueLiFlag: 999,
      zhuangtaiFlag: 999,
      XueLiData: ["博士", "硕士", "本科", "大专", "高中及一下"],
      zhuantaiData: ["在校学生", "已经毕业"],
      flag01: true,
      flag02: true,
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
    getLocation() {
      this.$router.push({
        path: "/locationSelect",
        query: {},
      });
    },
    getChangeXueLi(index) {
      console.log(index);
      this.changeXueLiFlag = index;
      this.flag01 = false;
    },

    getZhuTai(index) {
      console.log(index);
      this.zhuangtaiFlag = index;
      this.flag02 = false;
    },
  },
});
</script>
<style scoped lang="scss">
.sexS {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.titleText {
  text-align: center;
  // font-size: 18px;
}

.gkl .van-radio__label {
  padding-top: 10px !important;
}
.colored {
  background-color: #ee0a24;
  color: #fff;
}
.colorGrey {
  color: #333;
}
</style>