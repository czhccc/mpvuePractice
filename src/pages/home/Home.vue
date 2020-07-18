<template>
  <div class="home">
    <swiper indicator-dots indicator-color="white" indicator-active-color="pink" autoplay interval="2500" circular>
      <swiper-item v-for="(item, index) in booksSwiper" :key="index">
        <img :src="item.image" alt="">
      </swiper-item>
    </swiper>

    <div class="booksList">
      <div class="listNav">
        <span>全部商品</span>
        <span class="more" @click="toBooksList(books)"> 查看全部>> </span>
      </div>
      <div class="list">
        <div @click="toDetail(item)" class="bookItem" v-for="(item, index) in books" :key="index">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
          <p>{{item.author}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import datas from './datas/data.json' // 豆瓣图书API接口不再对外开放，因此使用本地的json数据

  export default {
    name: "Home",
    data() {
      return {
        books: datas
      }
    },
    computed: {
      // 以前4本书的图片作为轮播图
      booksSwiper() {
        return [...this.books].splice(0, 4)
      }
    },
    methods: {
      // 跳转到详情页
      toDetail(books) {
        wx.navigateTo({
          url: '/pages/detail/main?bookData=' + JSON.stringify(books)
        })
      },
      // 跳转到图书列表
      toBooksList(data) {
        wx.navigateTo({
          url: '/pages/booksList/main?booksList=' + JSON.stringify(data)
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    swiper
      width 100%
      height 400rpx
      img
        width 100%
        height 100%
    .booksList
      .listNav
        padding 10rpx
        .more
          float right
      .list
        display flex
        flex-wrap wrap
        .bookItem
          width 50%
          display flex
          flex-direction column
          align-items center
          border-bottom 1rpx solid #eee
          box-sizing border-box
          &:nth-child(2n + 1)
            border-right 1rpx solid #eee
          img
            width 200rpx
            height 200rpx
            margin 10rpx 0
          p
            font-size 24rpx
            line-height 50rpx
</style>
