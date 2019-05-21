import Vue from 'vue'
import SvgIcon from 'vue-svgicon'
import './svg-icon.less'
import './components'

Vue.use(SvgIcon, {
  tagName: 'svgicon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})