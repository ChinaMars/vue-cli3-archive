<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
      padding: 40px 20px 0 20px;
    }
  }
</style>
