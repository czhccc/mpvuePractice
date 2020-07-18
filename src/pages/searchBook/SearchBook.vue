<template>
  <div class="searchBook">
    <div class="searchHeader">
      <input @confirm="Search" confirm-type="搜索" v-model="searchContent" type="text" placeholder="书中自有黄金屋" placeholder-class="placeholder">
      <span @click="Clear" class="clear" v-show="searchContent">×</span>
    </div>

    <div v-if="booksList.length">
      <BooksList :booksList="booksList"/>
    </div>
  </div>
</template>

<script>
  import BooksList from "../booksList/BooksList";
  import {request} from "../../utils/index"

  export default {
    name: "SearchBook",
    components: {
      BooksList,
    },
    data(){
      return {
        searchContent: '', // 搜索框文本
        booksList: [] // 显示的图书列表
      }
    },
    methods: {
      Clear() { // 搜索栏 × 号清空文本
        this.searchContent = '' // 清空内容
        this.booksList = []
      },

      async Search() { // 搜索功能
        let data = {req: this.searchContent} // 获取用户输入的内容
        let result = await request('/searchBooks', data); // 发送请求给服务器获取数据
        this.booksList = result
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .searchBook
    .searchHeader
      width 80%
      height 80rpx
      margin auto
      border-bottom 1rpx solid #02a774
      position relative
      input
        height 100%
        width 100%
        .placeholder
          color #02a774
          text-align center
          font-size 28rpx
      .clear
        position absolute
        right 20rpx
        top 20rpx
        z-index 99
</style>
