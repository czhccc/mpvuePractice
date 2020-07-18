// 用来注册当前页面

import Vue from 'vue'
import Home from './Home'

// 生成当前页面的实例
const home = new Vue(Home)

// 挂载当前页面的实例
home.$mount()
