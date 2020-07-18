// 用来注册当前页面

import Vue from 'vue'
import Detail from './Detail'

// 生成当前页面的实例
const detail = new Vue(Detail)

// 挂载当前页面的实例
detail.$mount()
