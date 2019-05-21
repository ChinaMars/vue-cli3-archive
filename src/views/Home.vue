<template>
  <div class="home">
    <transition name="fade" mode="out-in">
        <section class="inner" v-if="loading" key="loading">
          <vue-content-loading
              :height="600"
              :width="400"
              :speed="2"
              primaryColor="#f3f3f3"
              secondaryColor="#ecebeb"
          >
              <rect x="0" y="0" rx="5" ry="5" width="400" height="162.5" />
              <circle cx="30" cy="210" r="19.855558415718257" />
              <rect x="2" y="236" rx="0" ry="0" width="60" height="18" />
              <circle cx="115" cy="210" r="19.855558415718257" />
              <rect x="85" y="236" rx="0" ry="0" width="60" height="18" />
              <circle cx="195" cy="210" r="19.855558415718257" />
              <rect x="166" y="236" rx="0" ry="0" width="60" height="18" />
              <circle cx="280" cy="210" r="19.855558415718257" />
              <rect x="250" y="236" rx="0" ry="0" width="60" height="18" />
              <circle cx="370" cy="210" r="19.855558415718257" />
              <rect x="338" y="236" rx="0" ry="0" width="60" height="18" />
              <rect x="0" y="285.78" rx="0" ry="0" width="130" height="67.45" />
              <rect x="140" y="285.78" rx="0" ry="0" width="130" height="67.45" />
              <rect x="280" y="284.78" rx="0" ry="0" width="130" height="67.45" />
          </vue-content-loading>
        </section>
        <section class="inner" v-else key="page">
            <van-swipe :autoplay="300000" indicator-color="white" :height="160">
              <van-swipe-item v-for="(image,index) in homeData.banner" :key="index">
                  <img class="ignore" :src="image" v-lazy="image"/>
              </van-swipe-item>
            </van-swipe>
            <van-swipe indicator-color="#249ff6" :height="90">
                <van-swipe-item v-for="(menu,indexMenu) in homeData.menu" :key="indexMenu">
                    <span v-for="(menuName,indexMenuName) in menu" :key="indexMenuName">{{menuName}}</span>
                </van-swipe-item>
            </van-swipe>
            <router-link to="/login" id="router-link">点击领取</router-link>
        </section>
    </transition>
    <Menu></Menu>
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
  </div>
</template>

<script>
// @ is an alias to /src
import VueContentLoading from 'vue-content-loading'
import { Swipe, SwipeItem } from 'vant'
import { home } from '../api/api'
import common from '@/mixins/common'
import Menu from '@/components/footer/Menu.vue'

export default {
  name: 'home',
  mixins: [common],
  components: {
    Menu,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    VueContentLoading
  },
  data() {
    return{
      homeData: {}
    }
  },
  mounted() {
    home().then(res =>{
      this.homeData = res.data
      this.loading = false
    })
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style lang="less">
    .van-swipe{
        img.ignore{
            width: 100%;
            max-width: 100%;
            height: 160px;
        }
    }
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
