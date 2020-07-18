// 用来注册当前页面

import Vue from 'vue'
import BooksList from './BooksList'

// 生成当前页面的实例
const booksList = new Vue(BooksList)

// 挂载当前页面的实例
booksList.$mount()
