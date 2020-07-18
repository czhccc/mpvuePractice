<template>
  <div class="preView">
    <swiper :indicator-dots="index != 3"
            indicator-color="white"
            indicator-active-color="pink"
            autoplay interval="2500"
            circular
            @change="indexChange">
      <swiper-item>
        <img src="/static/images/preView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/preView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/preView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/preView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper>
    <button class="btn" @click="jump" v-show="index === 3">开始体验</button>
  </div>
</template>

<script>
  export default {
    name: "PreView",
    data() {
      return {
        index: 0 // 轮播图的下标
      }
    },
    methods: {
      indexChange(event) { // 当轮播图的下标改变时
        // 注：当用vue语法绑定原生小程序的事件时，mpvue会将原生小程序的事件对象打包 mp事件对象
        // 更新轮播图下标index
        this.index = event.mp.detail.current
      },
      jump() { // 点击按钮跳转到主页
        wx.switchTab({
          url: '/pages/home/main'
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .preView
    width 100%
    height 100%
    swiper
      width 100%
      height 100%
      img
        width 100%
        height 100%
    .btn
      color white
      width 280rpx
      height 80rpx
      text-align center
      line-height 80rpx
      position absolute
      bottom 100rpx
      left 50%
      margin-left -140rpx
      background rgb(255, 105, 180)
</style>

