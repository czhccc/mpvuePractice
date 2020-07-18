<template>
  <div class="booksList">
    <div class="bookItem" v-for="(item, index) in booksList" :key="index">
      <img class="bookImg" :src="item.image" alt="">
      <div class="bookInfo">
        <p>{{item.title}}</p>
        <p>作者: {{item.author}}</p>
        <p>出版社: {{item.publisher}} </p>
      </div>
      <p class="bookPrice">{{item.price}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BooksList",
    props: {
      booksList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        booksList: []
      }
    },
    mounted() {
      if(this.$mp) { // 当通过路由跳转时，才会有 $mp 对象
        this.booksList = JSON.parse(this.$mp.query.booksList) // 保存传入的数据
        // 当没有使用小程序的跳转时，就不会有$mp对象，因此也不能获取query。
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .booksList
    .bookItem
      display flex
      padding 10rpx
      border-bottom 1rpx solid #eee
      img
        width 140rpx
        height 140rpx
        margin-right 20rpx
      .bookInfo
        width 70%
        font-size 30rpx
        line-height:50rpx
      .bookPrice
        color red
        font-size 36rpx
        font-weight bold
</style>
