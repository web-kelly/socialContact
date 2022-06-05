<template>
  <div class="login-containt">
    <img class="logo" src="../assets/images/logo.png" alt="" />
    <LoginByIntro />
    <van-button
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      class="change-login"
      type="primary"
      size="large"
      style="font-size: 16px; height: 50px; border-radius: 25px"
      @click="onSubmit"
      :disabled="!onSubmitStatus"
      >微信快捷登录</van-button
    >
    <van-checkbox
      @change="getOnSubmit"
      class="tybutton"
      v-model="checked"
      checked-color="#ee0a24"
      >同意<router-link to="./components/login/fwxy"
        >《用户服务协议》</router-link
      >和<router-link to="./components/login/ysbh"
        >《隐私保护协议》</router-link
      ></van-checkbox
    >
    <WarmPrompt :isShowNameDialog="isShowNameDialog" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginByIntro from "@/components/LoginByIntro.vue";
import { ref } from "vue";
import WarmPrompt from "@/components/login/WarmPrompt.vue";

export default defineComponent({
  name: "LoginView",
  components: {
    LoginByIntro,
    WarmPrompt,
  },
  setup() {
    const checked = ref(true);
    return { checked };
  },
  data() {
    return {
      onSubmitStatus: true,
      isShowNameDialog: false,
      loginFlg: true,
    };
  },
  methods: {
    getOnSubmit(val: boolean) {
      // let that = this;
      this.onSubmitStatus = val;
    },
    onSubmit() {
      //如果用户登录过，只需要进行温馨提示，微信登录授权，然后直接匹配对象进入首页。否则首次登录进行温馨提示，允许微信登录，然后进行信息填写页面
      if (this.loginFlg) {
        this.isShowNameDialog = !this.isShowNameDialog;
      } else {
        this.$router.push("/home");
      }

      // if (this.$data.logonType === "pwd") {
      //   console.log("密码登录");
      // } else {
      //   console.log("验证码登录");
      // }
    },
  },
});
</script>
<style scoped lang="scss">
.login-containt {
  text-align: center;
  background: url("assets/images/beijing.png");
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}
.logo {
  margin-top: 10%;
  width: 40%;
}
.change-login {
  margin-top: 40px;
  width: 70%;

  text-align: center;
}
.tybutton {
  position: fixed;
  bottom: 40px;
  left: 50%;
  margin-left: -270px;
}
</style>
