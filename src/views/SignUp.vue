<template>
    <div class="sign-up">
        <section class="banner full-img">
            <img class="ignore" :src="banner" v-lazy="banner" />
        </section>
        <section class="inner">
            <van-radio-group v-model="radio">
                <van-radio name="1">单选框 1</van-radio>
                <van-radio name="2">单选框 2</van-radio>
            </van-radio-group>
            <button @click="click">点击</button>
        </section>
        <Menu></Menu>
    </div>
</template>

<script>
  import { details } from '@/api/api'
  import Menu from '@/components/footer/Menu.vue'
  import { RadioGroup, Radio, Toast } from 'vant'

  export default {
    name: 'SignUp',
    components: {
      Menu,
      [RadioGroup.name]: RadioGroup,
      [Radio.name]: Radio
    },
    data() {
        return {
          radio: '1',
          banner: ''
        }
    },
    async created() {
        await this.getDetails()
    },
    methods: {
      click() {
        console.log(this.radio)
      },
      getDetails() {
        const data = {
          id: '4'
        }
        details(data).then((res) =>{
          const data = res.data.data
          this.banner = data.banner
          console.log(data.banner)
        }).catch((err) =>{
          Toast.fail(err.msg);
        })
      }
    }
  }
</script>

<style lang="less">
    .banner{
        height: 320px;
    }
</style>