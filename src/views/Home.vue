<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul :class="$style.red">
      <li w-375-224 aspectratio aspect-ratio="375/224">
        one
      </li>
      <li class="ignore">two</li>
      <li>three</li>
      <li>four</li>
    </ul>-->
    <vue-content-loading
            :height="600"
            :width="400"
            :speed="2"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
    >
      <rect x="10" y="10" rx="5" ry="5" width="380" height="162.5" />
      <circle cx="35.85555841571826" cy="211.15555841571828" r="19.855558415718257" />
      <rect x="12.51" y="285.78" rx="0" ry="0" width="118.27" height="67.45" />
      <rect x="141.51" y="285.78" rx="0" ry="0" width="118.27" height="67.45" />
      <rect x="270.51" y="284.78" rx="0" ry="0" width="118.27" height="67.45" />
      <rect x="12.5" y="236.8" rx="0" ry="0" width="48" height="18" />
      <circle cx="119.85555841571826" cy="211.15555841571828" r="19.855558415718257" />
      <rect x="83.5" y="3067.8" rx="0" ry="0" width="48" height="18" />
      <circle cx="200.85555841571826" cy="210.15555841571828" r="19.855558415718257" />
      <rect x="155.5" y="3067.8" rx="0" ry="0" width="48" height="18" />
      <circle cx="284.85555841571824" cy="209.15555841571828" r="19.855558415718257" />
      <circle cx="362.85555841571824" cy="207.15555841571828" r="19.855558415718257" />
      <rect x="95.5" y="234.8" rx="0" ry="0" width="48" height="18" />
      <rect x="178.5" y="234.8" rx="0" ry="0" width="48" height="18" />
      <rect x="260.5" y="233.8" rx="0" ry="0" width="48" height="18" />
      <rect x="340.5" y="235.8" rx="0" ry="0" width="48" height="18" />
    </vue-content-loading>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import VueContentLoading from 'vue-content-loading';

export default {
  name: 'home',
  components: {
    HelloWorld,
    VueContentLoading
  }
}
</script>

<style lang="scss">
  [w-375-224]{
    width: 375px;
    z-index: 99;
  }
  [w-375-224]{
    aspect-ratio:'375:224';
  }
  .ignore{
    width: 100px;
  }
</style>

<style module>
  .red{
    color: red;
  }
</style>
