<template>
  <div id="app">
    <transition :name="direction">
      <router-view class="container"></router-view>
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
      ...mapState('app',['direction'])
    }
  }
</script>

<style lang="less">
  @import (less) "~normalize.css";
  @import "~@/style/reset.less";
  @import "~@/style/variables.less";
  @import "~@/style/common.less";
  #app {
    .container{
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: #FFFFFF;
      overflow: auto;
    }
    .inner{
      padding: 40px 19px 0 19px;
    }
  }
</style>
