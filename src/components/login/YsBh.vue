<template>
  <div class="fwxy-contant">
    <van-nav-bar
      title="隐私保护政策"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div>
      <span>更新日期：2022年2月7日</span>
      <span>生效日期：2022年2月7日</span>
      <p style="text-indent: 2em">
        欢迎各位用户（以下简称“ 您
        ”）使用二狗APP（以下简称“本平台”或“本产品”）。本服务协议（以下简称“本协议”）是您与本平台以及本平台运营商深圳加速脱单科技有限公司（以下简称“本平台运营商”，本平台以及本平台运营商以下合称“我们”）之间关于您成为本平台会员且使用本平台运营商提供的服务所订立的协议。
      </p>
      <p style="text-indent: 2em">
        欢迎各位用户（以下简称“ 您
        ”）使用二狗APP（以下简称“本平台”或“本产品”）。本服务协议（以下简称“本协议”）是您与本平台以及本平台运营商深圳加速脱单科技有限公司（以下简称“本平台运营商”，本平台以及本平台运营商以下合称“我们”）之间关于您成为本平台会员且使用本平台运营商提供的服务所订立的协议。
      </p>
      <h1>1.服务和资格</h1>
      <van-divider />
      <h2>1.1 服务内容</h2>
      <p style="text-indent: 2em">
        本平台的服务分为线上服务和线下服务。“线上服务”是指本平台上显示的全部功能及服务。“线下服务”将不时予以更新。
        关于会员付费的特别提示：针对本平台提供的付费服务项目，您必须成为本平台的付费会员，方能享受本平台提供的相应服务。有关当前收费服务内容及其价格说明，请在购买前仔细阅读服务说明页面。该服务说明页面上所载之内容构成本协议的一部分。除本平台另有说明外，所有付费业务均不支持退费。
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "YcBh",
  props: {
    msg: String,
  },
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
});
</script>
<style scoped lang="scss">
</style>