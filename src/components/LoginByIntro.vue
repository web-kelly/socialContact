<template>
  <div class="jianjie">
    <div class="jianjieMS" style="margin-top: 0">
      <span class="MR"
        ><van-icon name="manager" color="#ee0a24" size="30"
      /></span>
      <div style="padding-top: 18px">
        <p class="jianjieWZ" style="font-size: 16px; margin-bottom: 4px">
          300万+优秀单身青年
        </p>
        <p class="jianjieCl">源自腾讯内部论坛，BAT/金融投行/公务员都在用</p>
      </div>
    </div>
    <div class="jianjieMS">
      <span class="MR"
        ><van-icon name="manager" color="#ee0a24" size="30"
      /></span>
      <div>
        <p class="jianjieWZ" style="font-size: 16px; margin-bottom: 4px">
          300万+优秀单身青年
        </p>
        <p class="jianjieCl">源自腾讯内部论坛，BAT/金融投行/公务员都在用</p>
      </div>
    </div>
    <div class="jianjieMS">
      <span class="MR"
        ><van-icon name="manager" color="#ee0a24" size="30"
      /></span>
      <div>
        <p class="jianjieWZ" style="font-size: 16px; margin-bottom: 4px">
          300万+优秀单身青年
        </p>
        <p class="jianjieCl">源自腾讯内部论坛，BAT/金融投行/公务员都在用</p>
      </div>
    </div>
    <div class="jianjieMS">
      <span class="MR"
        ><van-icon name="manager" color="#ee0a24" size="30"
      /></span>
      <div>
        <p class="jianjieWZ" style="font-size: 16px; margin-bottom: 4px">
          300万+优秀单身青年
        </p>
        <p class="jianjieCl">源自腾讯内部论坛，BAT/金融投行/公务员都在用</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "LoginByIntro",
  props: {
    msg: String,
  },
});
</script>
<style scoped lang="scss">
.jianjie {
  margin: 0 auto;
  width: 90%;
  height: 44%;
  margin-top: 60px;
  margin: 10px auto;
  background: #fff;
  border-radius: 20px;
  text-align: left;
}
.jianjieMS {
  display: flex;
  padding-left: 10px;
  margin: 48px 0;
}
.jianjieWz {
  font-weight: bold;
  margin-bottom: 3px;
}
.jianjieCl {
  color: #888;
}
.MR {
  margin-right: 10px;
  display: flex;
  align-items: flex-end;
}
</style>