// 用来注册当前页面

import Vue from 'vue'
import PreView from './PreView'

// 生成当前页面的实例
const preView = new Vue(PreView)

// 挂载当前页面的实例
preView.$mount()
