<template>
  <div id="app">
    <transition :name="direction">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'app',
    computed: {
      ...mapState([
        'direction'
      ])
    }
  }
</script>

<style lang="less">
  @import (less) "~normalize.css";
  @import "~@/style/reset.less";
  @import "~@/style/variables.less";
  @import "~@/style/common.less";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .inner{
      padding: 40px 19px 0 19px;
    }
  }
</style>
