<template>
  <div style="padding-bottom: 130px">
    <!-- <van-sticky>
      <van-nav-bar
        style="border-bottom: 1px solid #eee;
    margin-bottom: 10px;
}"
        title="用户主页"
        left-text="返回"
        left-arrow
      >
        <template #right>
          <van-icon name="weapp-nav" size="18" />
        </template>
      </van-nav-bar>
    </van-sticky> -->

    <div :style="style">
      <van-swipe
        :autoplay="3000"
        lazy-render
        class="vanSwp"
        indicator-color="#FFFFFF"
      >
        <van-swipe-item v-for="image in images" :key="image" class="swItem">
          <img :src="image" style="width: 100%; height: 100%" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div>
      <van-cell-group inset class="cellGroup">
        <!-- <van-cell title="单元格" value="内容" /> -->
        <van-cell title="冰糖心苹果">
          <template #title>
            <span class="custom-title">冰糖心苹果</span>
            <!-- <van-tag type="danger">标签</van-tag> -->
          </template>
          <template #label>
            <!-- <span>单元格</span>
            <van-tag type="danger">标签</van-tag> -->
            <van-row class="custom-label">
              <van-col span="12"
                ><van-icon name="underway-o" style="padding-right: 5px" /> 96年
                双子座</van-col
              >
              <van-col span="12"
                ><van-icon name="flower-o" style="padding-right: 5px" />172cm
                45kg</van-col
              >
            </van-row>
            <van-row class="custom-label">
              <van-col span="12"
                ><van-icon
                  name="location-o"
                  style="padding-right: 5px"
                />现居北京 重庆人</van-col
              >
              <van-col span="12"
                ><van-icon name="medal-o" style="padding-right: 5px" />北京大学
                本科</van-col
              >
            </van-row>
            <van-row class="custom-label">
              <van-col span="12"
                ><van-icon
                  name="manager-o"
                  style="padding-right: 5px"
                />银行从业者 财务</van-col
              >
              <van-col span="12"
                ><van-icon
                  name="balance-o"
                  style="padding-right: 5px"
                />年薪10~15万</van-col
              >
            </van-row>
          </template>
        </van-cell>
      </van-cell-group>
    </div>

    <div>
      <van-cell-group inset class="cellGroup">
        <!-- <van-cell title="单元格" value="内容" /> -->
        <van-cell title="冰糖心苹果" style="padding: 18px 15px">
          <template #title>
            <span style="color: #bbb; padding-right: 10px">微信号</span>
            <span>cl******</span>
            <!-- <van-tag type="danger">标签</van-tag> -->
          </template>

          <template #right-icon>
            <van-button
              color="#ee0a24"
              round
              plain
              type="primary"
              size="mini"
              style="padding: 0 15px"
              >查看</van-button
            >
          </template>
        </van-cell>
      </van-cell-group>
    </div>

    <div>
      <van-cell-group inset class="cellGroup">
        <!-- <van-cell title="单元格" value="内容" /> -->
        <van-cell title="身份认证">
          <template #title>
            <span class="custom-title" style="font-size: 0.4rem">身份认证</span>
            <!-- <van-tag type="danger">标签</van-tag> -->
          </template>
          <template #label v-if="flaginfo">
            <van-row>
              <van-col
                span="8"
                v-for="(item, index) in shenfens"
                :key="index"
                style="text-align: center"
              >
                <div class="imgbgs" :style="item.bgcolor">
                  <img class="imgbg" :src="item.inco" alt="" />
                </div>

                <span>{{ item.Text }}</span>
              </van-col>
              <div
                style="
                  margin-top: 15px;
                  margin-bottom: 6px;
                  width: 100%;
                  display: flex;
                  justify-content: center;
                "
              >
                <van-button
                  @click="getinfo"
                  style="width: 46px"
                  :icon="jiantou02"
                  type="default"
                  size="mini"
                  round
                ></van-button>
              </div>
            </van-row>
          </template>

          <template #label v-else-if="!flaginfo">
            <van-row>
              <van-cell v-for="(item, index) in shenfens" :key="index">
                <template #title>
                  <div style="display: flex; width: 144%">
                    <div :style="item.bgcolor" class="inobg">
                      <img :src="item.inco" alt="" class="inobgs" />
                    </div>

                    <div style="font-size: 12px; padding-left: 5px">
                      <span style="font-weight: bold">{{ item.Text }}</span>
                      <p style="color: #666">{{ item.Textinfo }}</p>
                    </div>
                  </div>
                </template>

                <template #value>
                  <div style="color: #8253fb">
                    {{ item.kexin }}
                  </div>
                  <div>
                    {{ item.kexindu }}
                  </div>
                  <!-- <span>{{ item.kexin }}</span>
                  <span>{{ item.kexindu }}</span> -->
                </template>
              </van-cell>

              <div
                style="
                  margin-top: 15px;
                  margin-bottom: 6px;
                  width: 100%;
                  display: flex;
                  justify-content: center;
                "
              >
                <van-button
                  @click="getinfo02"
                  style="width: 46px"
                  :icon="jiantou01"
                  type="default"
                  size="mini"
                  round
                ></van-button>
              </div>
            </van-row>
          </template>
        </van-cell>
      </van-cell-group>
    </div>

    <div>
      <van-cell-group inset class="cellGroup">
        <!-- <van-cell title="单元格" value="内容" /> -->
        <van-cell title="关于我">
          <template #title>
            <span class="custom-title" style="font-size: 0.4rem">关于我</span>
          </template>
          <template #label>
            <van-row>
              <van-col
                span="24"
                v-for="(item, index) in guanyume"
                :key="index"
                style="text-align: center"
              >
                <div :style="item.widthbg" class="guanyumes">
                  <span
                    style="
                      width: 10px;
                      height: 10px;
                      border-radius: 50%;
                      background: #8253fb;
                    "
                  ></span>
                  <span style="padding-left: 6px">{{ item.title }}</span>
                </div>
                <div style="padding: 15px 0 15px 0; text-align: start">
                  {{ item.descripts }}
                </div>
              </van-col>
            </van-row>
          </template>
        </van-cell>
      </van-cell-group>
    </div>

    <div>
      <van-cell-group inset class="cellGroup">
        <!-- <van-cell title="单元格" value="内容" /> -->
        <van-cell title="标签">
          <template #title>
            <span class="custom-title" style="font-size: 0.4rem">标签</span>
          </template>
          <template #label>
            <van-row>
              <van-col
                span="6"
                v-for="(item, index) in biaoqian"
                :key="index"
                style="text-align: center"
              >
                <div
                  style="width: 80%; border-radius: 18px; margin-bottom: 10px"
                  class="guanyumes"
                >
                  <span
                    style="
                      padding-left: 6px;
                      padding-bottom: 5px;
                      padding-top: 5px;
                    "
                    >{{ item.title }}</span
                  >
                </div>
              </van-col>
            </van-row>
          </template>
        </van-cell>
      </van-cell-group>
    </div>

    <div>
      <van-cell-group inset class="cellGroup">
        <!-- <van-cell title="单元格" value="内容" /> -->
        <van-cell title="其他信息">
          <template #title>
            <span class="custom-title" style="font-size: 0.4rem">其他信息</span>
            <!-- <van-tag type="danger">标签</van-tag> -->
          </template>
          <template #label v-if="flagqita">
            <van-row>
              <van-col span="24" style="text-align: center">
                <span>了解Ta的工作/购车/住房/婚姻等情况和家庭成员信息</span>
              </van-col>
              <div
                style="
                  margin-top: 15px;
                  margin-bottom: 6px;
                  width: 100%;
                  display: flex;
                  justify-content: center;
                "
              >
                <van-button
                  plain
                  type="primary"
                  @click="getqita"
                  style="width: 50%"
                  size="small"
                  round
                  >实名后查看更多</van-button
                >
              </div>
            </van-row>
          </template>

          <template #label v-else-if="!flagqita">
            <van-cell
              style="line-height: 16px"
              v-for="(item, index) in qitas"
              :key="index"
            >
              <template #title>
                <span style="padding-left: 6px">{{ item.title }}</span>
              </template>

              <template #icon>
                <van-icon :name="item.inco" class="search-icon" />
              </template>

              <template #value>
                <span>{{ item.value }}</span>
              </template>
            </van-cell>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
// import { ref } from "vue";
export default defineComponent({
  name: "ImgDetails",
  props: {
    // isShowNameDialog: {
    //   type: Boolean,
    //   default: false,
    // },
  },

  data() {
    return {
      jiantou01: require("assets/images/jiantou01.png"),
      jiantou02: require("assets/images/jiantou02.png"),
      images: [
        require("assets/swipeimgs/01.jpg"),
        require("assets/swipeimgs/02.jpg"),
        // require("assets/swipeimgs/01.jpg"),
      ],
      qitas: [
        {
          title: "单位性质",
          inco: require("assets/images/inco01.png"),
          value: "国企政府",
        },
         {
          title: "工作时间",
          inco: require("assets/images/inco02.png"),
          value: "早九晚六",
        },
         {
          title: "住房情况",
          inco: require("assets/images/inco03.png"),
          value: "为购房",
        },
         {
          title: "购车情况",
          inco: require("assets/images/inco04.png"),
          value: "未购车",
        },
         {
          title: "婚姻情况",
          inco: require("assets/images/inco05.png"),
          value: "未婚",
        },
      ],
      biaoqian: [
        {
          title: "慢热",
          id: "0",
          widthbg: { width: "calc(100%)" },
        },
        {
          title: "独立",
          id: "1",
          widthbg: { width: "calc(24%)" },
        },
        {
          title: "稳重",
          id: "2",
          widthbg: { width: "calc(24%)" },
        },
        {
          title: "活泼",
          id: "3",
          widthbg: { width: "calc(24%)" },
        },
        {
          title: "直率",
          id: "4",
          widthbg: { width: "calc(24%)" },
        },
        {
          title: "理性",
          id: "5",
          widthbg: { width: "calc(24%)" },
        },
        {
          title: "看电影",
          id: "6",
          widthbg: { width: "calc(24%)" },
        },
        {
          title: "风趣幽默",
          id: "7",
          widthbg: { width: "calc(24%)" },
        },
      ],
      guanyume: [
        {
          title: "自我描述",
          descripts: "早睡早起，喜欢小动物，生活简单，作息规律",
          widthbg: { width: "calc(24%)" },
        },
        {
          title: "家庭背景",
          descripts: "北京女孩，普通家庭，从小在昌平长大的",
          widthbg: { width: "calc(24%)" },
        },
        {
          title: "兴趣爱好",
          descripts: "跳舞，主要是古典舞和爵士舞，不是专业舞蹈胜，理科生",
          widthbg: { width: "calc(24%)" },
        },
        {
          title: "感情观",
          descripts: "相互喜欢喜欢我多一点的（第一条基本上就很难了吧）",
          widthbg: { width: "calc(24%)" },
        },
        {
          title: "理想的另一半",
          descripts:
            "年纪最好相差五岁以内，可以比我小，180cm以上，专一、真诚、不自大、善良",
          widthbg: { width: "calc(34%)" },
        },
        {
          title: "我为什么单身",
          descripts:
            "我觉得喜欢上一个人本来就不容易，宁缺毋滥选手。恋爱经历不多，也不想太多，伤元气，激情本就是消耗品，用完即止，剩下的都是经营",
          widthbg: { width: "calc(34%)" },
        },
        {
          title: "如果遇到对的人，我期待什么样的生活？",
          descripts: "希望双方都觉得比较舒适和愉快，相互理解，体谅",
          widthbg: { width: "calc(88%)" },
        },
      ],
      shenfens: [
        {
          inco: require("assets/images/shiming.png"),
          Text: "已实名认证",
          bgcolor: {
            backgroundColor: "rgb(226, 236, 250)",
          },
          Textinfo: "认证方式：居民身份证",
          kexin: "99%",
          kexindu: "可信度",
        },
        {
          inco: require("assets/images/gongzuo.png"),
          Text: "已工作认证",
          bgcolor: {
            backgroundColor: "rgb(255, 233, 226)",
          },
          Textinfo: "认证方式：名片/工牌/工作证",
          kexin: "99%",
          kexindu: "可信度",
        },
        {
          inco: require("assets/images/xueli.png"),
          Text: "已学历认证",
          bgcolor: {
            backgroundColor: "rgb(212, 255, 212)",
          },
          Textinfo: "认证方式：学信网验证编号",
          kexin: "99%",
          kexindu: "可信度",
        },
      ],

      style: {},
      with: 0,
      height: 0,
      activeName: "1",
      flaginfo: true,
      flagqita: true,
      // wepNav:require("assets/images/nanrenred.png"),
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
    let height = document.documentElement.clientHeight - 104;
    this.width = width;
    this.height = height * 0.8;
    this.style = { width: width + "px", height: this.height + "px" };
  },
  methods: {
    getqita() {
      this.flagqita = false;
    },
    getqita02() {
      this.flagqita = true;
    },
    getinfo() {
      this.flaginfo = false;
    },
    getinfo02() {
      this.flaginfo = true;
    },
    onChange(index) {
      index = index - 1;
      console.log(index);
    },
  },
});
</script>
<style scoped lang="scss">
.vanSwp {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  border-radius: 0 0 0.15rem 0.15rem;
}
.swItem img {
  border-radius: 0 0 0.15rem 0.15rem;
}
.cellGroup {
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);
  margin-top: 20px;
}
.custom-title {
  display: block;
  padding-bottom: 5px;
  font-size: 0.45rem;
  font-weight: bold;
}
.custom-label {
  margin-bottom: 0.15rem;
}
.custom-label van-icon {
  font-size: 0.25rem;
}
.imgbg {
  width: 40%;
  height: 40%;
  margin: 0 auto;
}
.imgbgs {
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.3rem auto;
}
.inobg {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inobgs {
  width: 40%;
  height: 40%;
  margin: 0 auto;
}
.guanyumes {
  display: flex;
  line-height: 0.3rem;
  font-size: 14px;
  color: #8253fb;
  background: #efdffc;
  padding: 10px 10px;
  border-radius: 15px;
  justify-content: center;
}
</style>