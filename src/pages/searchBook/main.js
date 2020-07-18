// 用来注册当前页面

import Vue from 'vue'
import SearchBook from './SearchBook'

// 生成当前页面的实例
const searchBook = new Vue(SearchBook)

// 挂载当前页面的实例
searchBook.$mount()
