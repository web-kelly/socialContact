<template>
  <div class="swipeImgCont" :style="style">
    <ul class="stack">
      <li
        class="stack-item"
        v-for="(item, index) in pages"
        :key="index"
        :style="[transformIndex(index), transform(index)]"
        @touchmove.stop.capture="touchmove"
        @touchstart.stop.capture="touchstart"
        @touchend.stop.capture="touchend($event, index)"
        @touchcancel.stop.capture="touchend($event, index)"
        @mousedown.stop.capture.prevent="touchstart"
        @mouseup.stop.capture.prevent="touchend($event, index)"
        @mousemove.stop.capture.prevent="touchmove"
        @mouseout.stop.capture.prevent="touchend($event, index)"
        @webkit-transition-end="onTransitionEnd(index)"
        @transitionend="onTransitionEnd(index)"
      >
        <img :src="item.src" />

        <div class="likeTxt">
          <div
            class="jieTxt"
            style="line-height: 26px; padding-top: 10px; padding-left: 10px"
          >
            <h1 style="font-size: 16px">{{ item.name }}</h1>
            <p style="font-size: 14px; padding-top: 4px">
              {{ item.distance }}
            </p>
            <span style="font-size: 12px">{{ item.sign }}</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="btnHover">
      <van-button
        @click="getBackNoLike"
        style="height: 42px; width: 42px; border-color: #dcdee0"
        class="btnstyle"
        size="normal"
        round
        :icon="backActiveflag ? backActive : back"
        :color="backActiveflag ? btncolorBack : btnxcolor"
        type="primary"
      />
      <van-button
        @click="prev"
        style="
          width: 90px;
          font-size: 30px;
          height: 42px;
          border-color: #dcdee0;
        "
        size="normal"
        class="btnstyle"
        round
        :icon="leftActive ? nolikeActive : nolike"
        :color="leftActive ? btncolorNolike : btnxcolor"
        type="primary"
      />

      <van-button
        @click="next"
        style="
          width: 90px;
          font-size: 24px;
          height: 42px;
          border-color: #dcdee0;
        "
        class="btnstyle"
        size="normal"
        round
        :icon="rightActive ? likeActive : like"
        :color="rightActive ? btncolorLike : btnxcolor"
        type="primary"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // pages数据包含基础的图片数据
    // pages: {
    //   type: Array,
    //   default: [],
    // },
  },
  data() {
    return {
      leftActive: false,
      rightActive: false,
      backActiveflag: false,

      back: require("assets/images/back.png"),
      nolike: require("assets/images/nolike.png"),
      like: require("assets/images/like.png"),

      backActive: require("assets/images/back-active.png"),
      nolikeActive: require("assets/images/nolike-active.png"),
      likeActive: require("assets/images/like-active.png"),

      btnxcolor: "#fff",
      btncolorNolike: "#C2C2C2",
      btncolorLike: "#FF5A3D",
      btncolorBack: "#FFCC33",

      basicdata: {
        start: {},
        end: {},
      },
      temporaryData: {
        isStackClick: true,
        offsetY: "",
        poswidth: 0,
        posheight: 0,
        lastPosWidth: "",
        lastPosHeight: "",
        lastZindex: "",
        rotate: 0,
        lastRotate: 0,
        visible: 2,
        tracking: false,
        animation: false,
        currentPage: 0,
        opacity: 1,
        lastOpacity: 0,
        swipe: false,
        zIndex: 10,
      },
      pages: [
        {
          id: "01",
          src: require("assets/swipeimgs/01.jpg"),
          name: "放荡不羁爱自由",
          distance: " 现居北京 96年 172cm 硕士",
          sign: "银行从业着 年薪10-15W",
          photos: [],
        },
        {
          id: "02",
          src: require("assets/swipeimgs/02.jpg"),
          name: "放荡不羁爱自由",
          distance: " 现居北京 96年 172cm 硕士",
          sign: "银行从业着 年薪10-15W",
          photos: [],
        },
        {
          id: "03",
          src: require("assets/swipeimgs/03.jpg"),
          name: "放荡不羁爱自由",
          distance: " 现居北京 96年 172cm 硕士",
          sign: "银行从业着 年薪10-15W",
        },
        {
          id: "04",
          src: require("assets/swipeimgs/04.jpg"),
          name: "放荡不羁爱自由",
          distance: " 现居北京 96年 172cm 硕士",
          sign: "银行从业着 年薪10-15W",
        },
        {
          id: "05",
          src: require("assets/swipeimgs/05.jpg"),
          name: "放荡不羁爱自由",
          distance: " 现居北京 96年 172cm 硕士",
          sign: "银行从业着 年薪10-15W",
        },
        {
          id: "06",
          src: require("assets/swipeimgs/06.jpg"),
          name: "放荡不羁爱自由",
          distance: " 现居北京 96年 172cm 硕士",
          sign: "银行从业着 年薪10-15W",
        },
        {
          id: "07",
          src: require("assets/swipeimgs/07.jpg"),
          name: "放荡不羁爱自由",
          distance: " 现居北京 96年 172cm 硕士",
          sign: "银行从业着 年薪10-15W",
        },
        {
          id: "08",
          src: require("assets/swipeimgs/08.jpg"),
          name: "放荡不羁爱自由",
          distance: " 现居北京 96年 172cm 硕士",
          sign: "银行从业着 年薪10-15W",
        },
        {
          id: "09",
          src: require("assets/swipeimgs/lastimg.jpg"),
          name: "*******",
          distance: " **** *** **** **",
          sign: "***** ********",
        },
      ],
    };
  },
  created() {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight - 104;
    this.width = width;
    this.height = height;
    this.style = { width: width + "px", height: height + "px" };
  },
  computed: {
    // 划出面积比例

    offsetRatio() {
      let width = this.$el.offsetWidth;
      let height = this.$el.offsetHeight;
      let offsetWidth = width - Math.abs(this.temporaryData.poswidth);
      let offsetHeight = height - Math.abs(this.temporaryData.posheight);
      let ratio = 1 - (offsetWidth * offsetHeight) / (width * height) || 0;
      return ratio > 1 ? 1 : ratio;
    },
    // 划出宽度比例
    offsetWidthRatio() {
      let width = this.$el.offsetWidth;
      let offsetWidth = width - Math.abs(this.temporaryData.poswidth);
      let ratio = 1 - offsetWidth / width || 0;
      return ratio;
    },
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.offsetRatio()
    //   this.offsetWidthRatio()
    // });
  },
  methods: {
    touchstart(e) {
      if (this.temporaryData.tracking) {
        return;
      }
      // 是否为touch
      if (e.type === "touchstart") {
        if (e.touches.length > 1) {
          this.temporaryData.tracking = false;
          return;
        } else {
          // 记录起始位置
          this.basicdata.start.t = new Date().getTime();
          this.basicdata.start.x = e.targetTouches[0].clientX;
          this.basicdata.start.y = e.targetTouches[0].clientY;
          this.basicdata.end.x = e.targetTouches[0].clientX;
          this.basicdata.end.y = e.targetTouches[0].clientY;
          // offsetY在touch事件中没有，只能自己计算
          this.temporaryData.offsetY =
            e.targetTouches[0].pageY - this.$el.offsetParent.offsetTop;
        }
        // pc操作
      } else {
        this.basicdata.start.t = new Date().getTime();
        this.basicdata.start.x = e.clientX;
        this.basicdata.start.y = e.clientY;
        this.basicdata.end.x = e.clientX;
        this.basicdata.end.y = e.clientY;
        this.temporaryData.offsetY = e.offsetY;
      }
      this.temporaryData.isStackClick = true;
      this.temporaryData.tracking = true;
      this.temporaryData.animation = false;
    },
    touchmove(e) {
      this.temporaryData.isStackClick = false;
      // 记录滑动位置
      if (this.temporaryData.tracking && !this.temporaryData.animation) {
        if (e.type === "touchmove") {
          e.preventDefault();
          this.basicdata.end.x = e.targetTouches[0].clientX;
          this.basicdata.end.y = e.targetTouches[0].clientY;
        } else {
          e.preventDefault();
          this.basicdata.end.x = e.clientX;
          this.basicdata.end.y = e.clientY;
        }
        // 计算滑动值
        this.temporaryData.poswidth =
          this.basicdata.end.x - this.basicdata.start.x;
        this.temporaryData.posheight =
          this.basicdata.end.y - this.basicdata.start.y;
        let rotateDirection = this.rotateDirection();
        let angleRatio = this.angleRatio();
        this.temporaryData.rotate =
          rotateDirection * this.offsetWidthRatio * 15 * angleRatio;
        //自己新增代码

        let x = parseInt(e.changedTouches[0].clientX);
        if (x < this.basicdata.start.x) {
          //   this.leftActive = true;
          //   console.log("左滑");
          //   if (this.leftActive) {
          //   this.rightActive = false;
          // }
          this.rightActive = true;
          // console.log("左滑，喜欢");
          if (this.rightActive) {
            this.leftActive = false;
          }
        }
        if (x > this.basicdata.start.x) {
          this.leftActive = true;
          // console.log("右滑,不喜欢");
          if (this.leftActive) {
            this.rightActive = false;
          }
        }

        if (this.leftActive) {
          this.rightActive = false;
        } else if (this.rightActive) {
          this.leftActive = false;
        }
      }
    },
    touchend(e, index) {
      if (this.temporaryData.isStackClick) {
        //父组件传递过来的点击事件
        this.$emit("click", index);
        this.temporaryData.isStackClick = false;
      }
      this.temporaryData.isStackClick = true;
      this.temporaryData.tracking = false;
      this.temporaryData.animation = true;
      // 滑动结束，触发判断
      // 判断划出面积是否大于0.4
      if (this.offsetRatio >= 0.4) {
        // 计算划出后最终位置
        let ratio = Math.abs(
          this.temporaryData.posheight / this.temporaryData.poswidth
        );
        this.temporaryData.poswidth =
          this.temporaryData.poswidth >= 0
            ? this.temporaryData.poswidth + 200
            : this.temporaryData.poswidth - 200;
        this.temporaryData.posheight =
          this.temporaryData.posheight >= 0
            ? Math.abs(this.temporaryData.poswidth * ratio)
            : -Math.abs(this.temporaryData.poswidth * ratio);
        this.temporaryData.opacity = 0;
        this.temporaryData.swipe = true;
        this.leftActive = false;
        this.rightActive = false;
        this.nextTick();
        // 不满足条件则滑入
      } else {
        this.leftActive = false;
        this.rightActive = false;
        this.temporaryData.poswidth = 0;
        this.temporaryData.posheight = 0;
        this.temporaryData.swipe = false;
        this.temporaryData.rotate = 0;
      }
    },
    nextTick() {
      // 记录最终滑动距离
      this.temporaryData.lastPosWidth = this.temporaryData.poswidth;
      this.temporaryData.lastPosHeight = this.temporaryData.posheight;
      this.temporaryData.lastRotate = this.temporaryData.rotate;
      this.temporaryData.lastZindex = 20;
      // 循环currentPage
      // this.temporaryData.currentPage =
      //   this.temporaryData.currentPage === this.pages.length - 1
      //     ? 0
      //     : this.temporaryData.currentPage + 1;

      //高凯丽更改只能滑到最后一张
      if (this.temporaryData.currentPage === this.pages.length - 1) {
        this.temporaryData.currentPage = this.pages.length - 1;
      } else {
        this.temporaryData.currentPage = this.temporaryData.currentPage + 1;
      }

      // currentPage切换，整体dom进行变化，把第一层滑动置最低
      this.$nextTick(() => {
        this.temporaryData.poswidth = 0;
        this.temporaryData.posheight = 0;
        this.temporaryData.opacity = 1;
        this.temporaryData.rotate = 0;
      });
    },
    onTransitionEnd(index) {
      let lastPage =
        this.temporaryData.currentPage === 0
          ? this.pages.length - 1
          : this.temporaryData.currentPage - 1;
      // dom发生变化正在执行的动画滑动序列已经变为上一层
      if (this.temporaryData.swipe && index === lastPage) {
        this.temporaryData.animation = true;
        this.temporaryData.lastPosWidth = 0;
        this.temporaryData.lastPosHeight = 0;
        this.temporaryData.lastOpacity = 0;
        this.temporaryData.lastRotate = 0;
        this.temporaryData.swipe = false;
        this.temporaryData.lastZindex = -1;
      }
    },
    prev() {
      this.temporaryData.tracking = false;
      this.temporaryData.animation = true;
      // 计算划出后最终位置
      let width = this.$el.offsetWidth;
      this.temporaryData.poswidth = -width;
      this.temporaryData.posheight = 0;
      this.temporaryData.opacity = 0;
      this.temporaryData.rotate = "-3";
      this.temporaryData.swipe = true;
      this.nextTick();
    },
    next() {
      this.temporaryData.tracking = false;
      this.temporaryData.animation = true;
      // 计算划出后最终位置
      let width = this.$el.offsetWidth;
      this.temporaryData.poswidth = width;
      this.temporaryData.posheight = 0;
      this.temporaryData.opacity = 0;
      this.temporaryData.rotate = "3";
      this.temporaryData.swipe = true;
      this.nextTick();
    },
    rotateDirection() {
      if (this.temporaryData.poswidth <= 0) {
        return -1;
      } else {
        return 1;
      }
    },
    angleRatio() {
      let height = this.$el.offsetHeight;
      let offsetY = this.temporaryData.offsetY;
      let ratio = -1 * ((2 * offsetY) / height - 1);
      return ratio || 0;
    },
    inStack(index, currentPage) {
      let stack = [];
      let visible = this.temporaryData.visible;
      let length = this.pages.length;
      for (let i = 0; i < visible; i++) {
        if (currentPage + i < length) {
          stack.push(currentPage + i);
        } else {
          stack.push(currentPage + i - length);
        }
      }
      return stack.indexOf(index) >= 0;
    },
    offsetRatio000() {
      this.$nextTick(() => {
        //使用nextTick为了保证dom元素都已经渲染完毕
        let width = this.$el.offsetWidth;
        let height = this.$el.offsetHeight;
        let offsetWidth = width - Math.abs(this.temporaryData.poswidth);
        let offsetHeight = height - Math.abs(this.temporaryData.posheight);
        let ratio = 1 - (offsetWidth * offsetHeight) / (width * height) || 0;
        return ratio > 1 ? 1 : ratio;
      });
    },
    // 非首页样式切换
    transform(index) {
      let currentPage = this.temporaryData.currentPage;
      let length = this.pages.length;
      let lastPage =
        currentPage === 0 ? this.pages.length - 1 : currentPage - 1;
      let style = {};
      let visible = this.temporaryData.visible;
      if (index === this.temporaryData.currentPage) {
        return;
      }
      if (this.inStack(index, currentPage)) {
        let perIndex =
          index - currentPage > 0
            ? index - currentPage
            : index - currentPage + length;
        style["opacity"] = "1";
        // style["transform"] =
        //   "translate3D(0,0," +
        //   -1 * 60 * (perIndex - this.offsetRatio000) +
        //   "px" +
        //   ")";
        style["transform"] = "translate3D(0,0,0)";
        style["zIndex"] = visible - perIndex;
        if (!this.temporaryData.tracking) {
          style["transitionTimingFunction"] = "ease";
          style["transitionDuration"] = 300 + "ms";
        }
      } else if (index === lastPage) {
        style["transform"] =
          "translate3D(" +
          this.temporaryData.lastPosWidth +
          "px" +
          "," +
          this.temporaryData.lastPosHeight +
          "px" +
          ",0px) " +
          "rotate(" +
          this.temporaryData.lastRotate +
          "deg)";
        style["opacity"] = this.temporaryData.lastOpacity;
        style["zIndex"] = this.temporaryData.lastZindex;
        style["transitionTimingFunction"] = "ease";
        style["transitionDuration"] = 300 + "ms";
      } else {
        style["zIndex"] = "-1";
        // style["transform"] =
        //   "translate3D(0,0," + -1 * visible * 60 + "px" + ")";

        style["transform"] = "translate3D(0,0,0)";
      }
      return style;
    },
    // 首页样式切换
    transformIndex(index) {
      if (index === this.temporaryData.currentPage) {
        let style = {};
        style["transform"] =
          "translate3D(" +
          this.temporaryData.poswidth +
          "px" +
          "," +
          this.temporaryData.posheight +
          "px" +
          ",0px) " +
          "rotate(" +
          this.temporaryData.rotate +
          "deg)";
        style["opacity"] = this.temporaryData.opacity;
        style["zIndex"] = 10;
        if (this.temporaryData.animation) {
          style["transitionTimingFunction"] = "ease";
          style["transitionDuration"] =
            (this.temporaryData.animation ? 300 : 0) + "ms";
        }
        return style;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.stack {
  width: 94%;
  height: 70%;

  position: relative;
  perspective: 1000px; //子元素视距
  perspective-origin: 50% 150%; //子元素透视位置
  -webkit-perspective: 1000px;
  -webkit-perspective-origin: 50% 150%;
  margin: 0;
  padding: 0;
}
.stack-item {
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  text-align: center;
  position: absolute;
  // left: 50%;
  // margin-left: -47%;
  // overflow: hidden;
}
.stack-item img {
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
  border-radius: 0.25rem 0.25rem 0 0;
  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.25);
}
.swipeImgCont {
  display: flex;
  // justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.likeTxt {
  box-sizing: border-box;
  width: 100%;
  background: #fff;
  border: 0.01333rem solid #eee;
  height: 30%;
  border-radius: 0 0 0.25rem 0.25rem;
  position: relative;
  box-shadow: 0 0 10px -1px rgba(0, 0, 0, 0.05);
}
.btnHover {
  width: 80%;
  position: absolute;
  bottom: 6%;
  display: flex;
  z-index: 3;
  overflow: hidden;
  justify-content: space-between;
}
.jieTxt {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // padding-top: 10px;
  padding-top: 24px;
  padding-left: 10px;
}
.btnstyle {
  border-color: #dcdee0;
  // box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px;
  // box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 20px rgba(0, 0, 0, 0.1);
}
.btnstyle .van-icon__image {
  height: 22px;
}
</style>