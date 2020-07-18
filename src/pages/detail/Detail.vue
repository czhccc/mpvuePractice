<template>
  <div class="detail">
    <div class="bookInfo">
      <h1>{{bookData.title}}</h1>
      <img :src="bookData.image" alt="">
      <div class="info">
        <p>作者: {{bookData.author}}</p>
        <p>出版社: {{bookData.publisher}} </p>
        <p>出版日期: {{bookData.pubdate}}</p>
        <p>定价: {{bookData.price}}</p>
      </div>
    </div>

    <button open-type="share" class="shareBtn">分享给好友</button>
    <div class="content">
      <article>
        <h2>作者简介</h2>
        <section>
          {{bookData.author_intro}}
        </section>
      </article>
      <article>
        <h2>内容简介</h2>
        <section>
          {{bookData.summary}}
        </section>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Detail",
    data() {
      return {
        bookData: {}
      }
    },
    mounted() {
      this.bookData = JSON.parse(this.$mp.query.bookData) // 将传入的数据保存
      wx.setNavigationBarTitle({ // 设置当行窗口的标题
        title: this.bookData.title
      })
    },
    onShareAppMessage(event) { // 自定义转发
      return {
        title: '硅谷图书',
        path: '/pages/detail/main',
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .detail
    .bookInfo
      display flex
      flex-direction column
      h1
        text-align center
        font-size 40rpx
        font-weight bold
        margin 10rpx 0
      img
        width 70%
        height 700rpx
        margin 0 auto
      .info
        margin-left 15%
        p
          line-height 50rpx

    .shareBtn
      width 300rpx
      height 80rpx
      line-height 80rpx
      text-align center
      margin 20rpx auto
    .content
      margin 30rpx 100rpx
      article
        margin-top 50rpx
        h2
          font-size 30rpx
          font-weight bold
          color #02a774
          text-align center
        section
          font-size 28rpx
          text-indent 28rpx
</style>
