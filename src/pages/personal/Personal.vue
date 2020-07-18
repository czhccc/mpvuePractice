<template>
  <div class="personal">
    <div class="header">
      <img :src="userInfo.avatarUrl ? userInfo.avatarUrl : '/static/images/personal/personal.png'" alt="">
      <button open-type="getUserInfo" @getuserinfo="getUserInfo">{{userInfo.nickName ? userInfo.nickName: '登录'}}</button>
    </div>
    <div class="cardList">
      <div class="card" @click="scan">
        <span>扫码看书</span>
        <span class="more"> > </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Personal",
    data() {
      return {
        userInfo: {}
      }
    },
    methods: {
      getUserInfo(res) {
        if(res.mp.detail.userInfo) { // 如果有userInfo，则表示用户是允许授权
          this.userInfo = res.mp.detail.userInfo
        }
      },
      scan() {
        wx.scanCode({
          success: (res) => {
            console.log(res.result); // 打印 ISBN码
            // 根据 ISBN码向豆瓣服务器发送请求，返回相应的数据
            // ...

            // 因为豆瓣图书的相关接口不能用了，所以后续的功能也不继续进行了
          }
        })
      }
    },
    mounted() {
      wx.getUserInfo({ // 如果用户已经授权过，则下次自动登录
        success: res => {
          this.userInfo = res.userInfo
          console.log('用户已授权过，自动登录')
        },
        fail: () => {
          console.log('用户未曾授权，无法自动登录')
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .personal
    .header
      padding 40rpx
      background #02a774
      img
        width 100rpx
        height 100rpx
        vertical-align middle
        border-radius 50rpx
      button
        display inline-block
        height 60rpx
        line-height 60rpx
        background rgba(255,255,255, 0.5)
        vertical-align middle
        margin-left 40rpx
        max-width:200rpx
    .cardList
      .card
        width 94%
        height 60rpx
        line-height 60rpx
        margin 10rpx auto
        border 1rpx solid #eee
        padding 10rpx
        .more
          float right
</style>
