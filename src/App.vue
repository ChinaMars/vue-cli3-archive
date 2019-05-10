<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "./style/common/reset.scss";
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s .5s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>
