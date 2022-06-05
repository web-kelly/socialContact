<template>
  <van-nav-bar title="" left-text="返回" left-arrow @click-left="onClickLeft" />
  <div class="SexSelect-contant">
    <div>
      <h1 class="titleText" style="font-size: 18px">您现在居住在哪里</h1>
      <h1
        class="titleText"
        style="font-size: 12px;margin: 0;
    font-weight: normal;
}"
      >
        优先为您推荐同城用户
      </h1>
      <div
        class="sexS"
        style="width: 80%; display: flex; flex-wrap: wrap; margin: 40px auto"
      >
        <van-field
          v-model="fieldValue"
          is-link
          readonly
          label="地区"
          placeholder="请选择所在地区"
          @click="show = true"
        />
        <van-popup v-model:show="show" round position="bottom">
          <van-cascader
            v-model="cascaderValue"
            title="请选择所在地区"
            :options="options"
            @close="show = false"
            @finish="onFinish"
          />
        </van-popup>
      </div>
    </div>

    <van-row justify="center">
      <van-col span="20"
        ><van-button
          @click="getLogin"
          :disabled="!flag01 ? false : true"
          type="primary"
          block
          round
          color="#ee0a24"
        >
          进入小程序
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
      show: false,
      fieldValue: "",
      cascaderValue: "",
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],

      flag01: true,
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
    onFinish(selectedOptions) {
      if (selectedOptions.value != "") {
        this.flag01 = false;
      }
      console.log(selectedOptions.selectedOptions);
      this.show = false;
      this.fieldValue = selectedOptions.selectedOptions
        .map((option) => option.text)
        .join("/");
    },
    getLogin() {
      this.$router.push({
        path: "/home",
        query: {},
      });
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
</style>