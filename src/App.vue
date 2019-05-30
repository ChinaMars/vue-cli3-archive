<template>
  <div id="app">
    <transition :name="direction">
      <router-view class="container" :class="{'hasMenu' : isMenu}"></router-view>
    </transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'app',
    components: {

    },
    computed: {
      ...mapState('app',['direction','isMenu'])
    }
  }
</script>

<style lang="less">
  @import (less) "~normalize.css";
  @import "~@/style/reset.less";
  @import "~@/style/common.less";
</style>
