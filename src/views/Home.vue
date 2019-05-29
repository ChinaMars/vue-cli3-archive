<template>
  <div class="home">
    <transition name="fade" mode="out-in">
        <section class="inner" v-if="loading" key="loading">
          <vue-content-loading
              :height="680"
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
              <rect x="0" y="375" rx="0" ry="0" width="400" height="37.45"></rect>
              <rect x="0" y="430" rx="5" ry="5" width="150" height="110"></rect>
              <rect x="170" y="430" rx="0" ry="0" width="240" height="20"></rect>
              <rect x="170" y="460" rx="0" ry="0" width="200" height="15"></rect>
              <rect x="170" y="490" rx="0" ry="0" width="240" height="15"></rect>
              <rect x="170" y="520" rx="0" ry="0" width="240" height="15"></rect>
              <rect x="0" y="560" rx="5" ry="5" width="150" height="110"></rect>
              <rect x="170" y="560" rx="0" ry="0" width="240" height="20"></rect>
              <rect x="170" y="590" rx="0" ry="0" width="200" height="15"></rect>
              <rect x="170" y="620" rx="0" ry="0" width="240" height="15"></rect>
              <rect x="170" y="650" rx="0" ry="0" width="240" height="15"></rect>
          </vue-content-loading>
        </section>
        <section class="inner" v-else key="page">
            <van-swipe :autoplay="3000" indicator-color="white" :height="160">
              <van-swipe-item v-for="(image,index) in homeData.banner" :key="index">
                  <img class="ignore" :src="image" v-lazy="image"/>
              </van-swipe-item>
            </van-swipe>
            <van-swipe indicator-color="#249ff6" :height="90" id="menu-list">
                <van-swipe-item v-for="(menu,indexMenu) in homeData.menu" :key="indexMenu">
                    <div class="col" v-for="(menuItem,indexMenuItem) in menu" :key="indexMenuItem">
                        <svgicon
                            :name="menuItem.icon"
                            width="35"
                            height="35"
                        ></svgicon>
                        <span>{{menuItem.text}}</span>
                    </div>
                </van-swipe-item>
            </van-swipe>
            <van-tabs sticky swipeable animated class="tabs">
                <van-tab v-for="(tabs,indexTabs) in homeData.tabs" :title="tabs.title" :key="indexTabs">
                    <div class="col" v-for="(item, indexTabsItem) in tabs.info" :key="indexTabsItem">
                        <div class="image">
                            <img class="ignore" :src="item.img" v-lazy="item.img"/>
                            <label class="label">{{item.label}}</label>
                        </div>
                        <div class="info">
                            <h2>{{item.title}}</h2>
                            <p>
                                <span><span class="title">开班时间</span><span class="number">{{item.date}}</span></span>
                                <span><span class="title">人数</span><span class="number"><span class="sign-up-num">{{item.number}}</span>/40</span></span>
                            </p>
                            <div class="info-bottom">
                                <p>
                                    <span>{{item.school}}</span>
                                    <span v-if="item.recommend" class="recommend">推荐</span>
                                </p>
                                <p>
                                    <span class="tag">
                                        <label v-for="(tag, indexTag) in item.tag" :key="indexTag">{{tag}}</label>
                                    </span>
                                    <span class="price">￥<span>{{item.price}}</span></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
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
import { Swipe, SwipeItem, Tabs, Tab, Toast } from 'vant'
import { home } from '@/api/api'
import common from '@/mixins/common'
import Menu from '@/components/footer/Menu.vue'

export default {
  name: 'home',
  mixins: [common],
  components: {
    Menu,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    VueContentLoading
  },
  data() {
    return{
      homeData: {}
    }
  },
  async created() {
    await this.getHomeData()
    this.loading = false
  },
  mounted() {

  },
  methods: {
    getHomeData() {
      home().then((res) =>{
        this.homeData = res.data.data
      }).catch((err) =>{
        Toast.fail(err.msg);
      })
    }
  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
    .home{
        #menu-list{
            margin-top: 50px;
            .van-swipe-item{
                display: flex;
            }
            .col{
                display: flex;
                flex-direction: column;
                align-items: center;
                flex: 1;
                span{
                    padding-top: 20px;
                    font-size: 28px;
                }
            }
        }
        .tabs{
            .col{
                display: flex;
                margin-top: 40px;
                padding: 0 2px 0 20px;
                &:last-child{
                    margin-bottom: 0;
                }
                .image{
                    position: relative;
                    img{
                        border-radius: 10px;
                    }
                    .label{
                        top: 15px;
                        left: -10px;
                        padding: 4px 10px;
                        .label(@white,@blue,@blue-xl)
                    }
                }
                .info{
                    padding-left: 20px;
                    h2{
                        width: 420px;
                        margin-bottom: 15px;
                        font-weight: 500;
                        .text-omit;
                    }
                    p{
                        &:last-child{
                            margin-bottom: 0;
                        }
                        span{
                            display: inline-block;
                        }
                        > span{
                            margin-right: 20px;
                            &:last-child{
                                margin-right: 0;
                            }
                        }
                    }
                    .info-bottom{
                        p{
                            .flex-vertical-between
                        }
                    }
                    .title{
                        padding-right: 10px;
                    }
                    .recommend{
                        .border-1px(@gray);
                        color: @gray-xl;
                        padding: 5px 10px 2px 10px;
                        font-size: 18px;
                    }
                    .tag{
                        label{
                            padding: 4px 11px 4px 14px;
                            border-radius: 5px;
                            margin-right: 10px;
                            position: relative;
                            display: inline-block;
                            &:after { //设置1px-border-radicus时增加
                                .border-1px-radius(@gray)
                            }
                            &:last-child{
                                margin-right: 0;
                            }
                        }
                    }
                    .number{
                        color: @gray;
                        .sign-up-num{
                            color: @blue;
                        }
                    }
                    .price{
                        color: @orange;
                        span{
                            font-size: 36px;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
    [w-375-224]{
        width: 375px;
        z-index: 99;
    }
    [w-375-224]{
        aspect-ratio:'375:224';
    }
</style>
