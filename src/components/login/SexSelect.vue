<template>
  <van-nav-bar title="" left-text="返回" left-arrow @click-left="onClickLeft" />
  <div class="SexSelect-contant">
    <div>
      <h1 class="titleText" style="font-size: 18px">您的性别为</h1>
      <div class="sexS">
        <van-radio-group
          v-model="checked"
          class="gkl"
          style="display: flex; height: 80px; font-size: 16px"
          @change="getChecked"
        >
          <van-radio name="1" id="radio" style="margin-right: 30px">
            男生
            <template #icon="props">
              <img
                class="img-icon"
                :src="props.checked ? activeIcon : inactiveIcon"
              />
            </template>
          </van-radio>
          <van-radio name="2" id="radio">
            女生
            <template #icon="props">
              <img
                class="img-icon"
                :src="props.checked ? activeIconNv : inactiveIconNv"
              />
            </template>
          </van-radio>
        </van-radio-group>
      </div>
    </div>

    <div>
      <h1 class="titleText" style="font-size: 18px">您何时出生的</h1>
      <div class="sexS">
        <van-tabs
          v-model="active"
          ellipsis
          style="width: 100%"
          @click-tab="tabHandler"
        >
          <van-tab
            title="70后"
            style="width: 88%; margin: 20px auto; line-height: 40px"
          >
            <van-button
              style="
                margin-right: 20px;
                padding: 10px 16px;
                margin-bottom: 20px;
              "
              :class="buttonColor70 == index ? 'colored' : 'colorGrey'"
              size="small"
              v-for="index in 10"
              :key="index"
              round
              type="default"
              @click="getChangeBut70(index)"
              >{{ 1970 + index - 1 }}</van-button
            >
          </van-tab>
          <van-tab
            title="80后"
            style="width: 88%; margin: 20px auto; line-height: 40px"
          >
            <van-button
              style="
                margin-right: 20px;
                padding: 10px 16px;
                margin-bottom: 20px;
              "
              :class="buttonColor80 == index ? 'colored' : 'colorGrey'"
              size="small"
              v-for="index in 10"
              :key="index"
              round
              type="default"
              @click="getChangeBut80(index)"
              >{{ 1980 + index - 1 }}</van-button
            >
          </van-tab>
          <van-tab
            title="90后"
            style="width: 88%; margin: 20px auto; line-height: 40px"
          >
            <van-button
              style="
                margin-right: 20px;
                padding: 10px 16px;
                margin-bottom: 20px;
              "
              :class="buttonColor90 == index ? 'colored' : 'colorGrey'"
              size="small"
              v-for="index in 10"
              :key="index"
              round
              type="default"
              @click="getChangeBut90(index)"
              >{{ 1990 + index - 1 }}</van-button
            >
          </van-tab>
          <van-tab
            title="00后"
            style="width: 88%; margin: 20px auto; line-height: 40px"
          >
            <van-button
              style="
                margin-right: 20px;
                padding: 10px 16px;
                margin-bottom: 20px;
              "
              :class="buttonColor00 == index ? 'colored' : 'colorGrey'"
              size="small"
              v-for="index in 10"
              :key="index"
              round
              type="default"
              @click="getChangeBut00(index)"
              >{{ 2000 + index - 1 }}</van-button
            >
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <van-row justify="center">
      <van-col span="20"
        ><van-button :disabled="(!flag01&&!flag02)?false:true" type="primary" block round color="#ee0a24" @click="getEducation">
          下一步（1/3）
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
      buttonColor70: 0,
      buttonColor80: 0,
      buttonColor90: 0,
      buttonColor00: 0,
      checked: true,
      checked2: true,
      checkedFlag: false,
      activeIcon: require("assets/images/nanrenred.png"),
      inactiveIcon: require("assets/images/nanren.png"),
      activeIconNv: require("assets/images/nvrenred.png"),
      inactiveIconNv: require("assets/images/nvren.png"),
      active: 0,
      name:"",
      flag01:true,
      flag02:true
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
    getEducation(){
      this.$router.push({
        path:"/educationSelect",
        query:{

        }
      })
    },
    getChecked(name) {
      this.checkedFlag = !this.checkedFlag;
      this.name=name;
      this.flag01 =false;
      console.log(name);
    },
    getChangeBut70(index) {
      this.buttonColor70 = index;
       this.flag02 =false;
    },
    getChangeBut80(index) {
      this.buttonColor80 = index;
       this.flag02 =false;
    },
    getChangeBut90(index) {
      this.buttonColor90 = index;
       this.flag02 =false;
    },
    getChangeBut00(index) {
      this.buttonColor00 = index;
       this.flag02 =false;
    },
    tabHandler(index) {
      
      this.active = index;
      console.log(typeof this.active);
      console.log(this.active);
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
.img-icon {
  height: 46px;
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