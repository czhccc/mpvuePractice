// 用来注册当前页面

import Vue from 'vue'
import Personal from './Personal'

// 生成当前页面的实例
const personal = new Vue(Personal)

// 挂载当前页面的实例
personal.$mount()
