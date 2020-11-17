import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon', SvgIcon)

// 要搜索的文件夹目录
// 是否还应该搜索它的子目录，
// 以及一个匹配文件的正则表达式。
const req = require.context('./svg', false, /\.svg$/)

const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)