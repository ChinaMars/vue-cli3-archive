<template>
 <div class="box flex-col bg_white login-list">
  <!-- <div class="login-bg"></div>

  <div class="login-tab flex-row">
    <div class="tac item-1 login-list-tab1 on">会员登录</div>
    <div class="tac item-1 login-list-tab2">代理人登录</div>
  </div> -->
  <div class="flex justify-end">
    <div >
      {{STRINGS.login_manger_enter}}
    </div>
  </div>
   <div class="flex black login-title ">
    <span>
      {{STRINGS.login_title}}
    </span>
    <span class="login-manger" v-show='status'>
      {{STRINGS.login_manger}}
      </span>
  </div>
  <div class="">
    <div class="login-list1">
      <div class="phone-list flex-row"><input type="text" name="" class="item-1" value="" maxlength="11" :placeholder="STRINGS.login_tel_placeholder"></div>
      <div class="password-list"><input type="text" name="" value="" :placeholder="STRINGS.login_psw_placeholder"></div>
    </div>
    <div><a href="index.html" class="main-btn">登录</a></div>
      <van-button plain type="danger">默认按钮</van-button>
  </div>
</div>
</template>




<script>
  import Vue from 'vue'
  import {fetchLogin,fetchRegister} from "../../api/api";
  import { Button } from 'vant';
  import STRINGS from '../../assets/strings'
Vue.use(Button);
export default {
  name: "Login",
  data() {
    return {
      status: false,
      name: "",
      pas: "",
      STRINGS,  
    };
  },

  methods: {
    submit() {
      fetchLogin({ name: this.name, pas: this.pas }).then(res => {
        window.console.log(res)
        if(res.isSuccess){
          this.$toast.success('登陆成功，fuck you ')
        }
      });
    },
    register() {
      fetchRegister({ name: this.name, pas: this.pas }).then(res => {
        if(res.isSuccess){
          this.$toast.success('注册成功，fuck you ')
        }
      });
    },
  },

  computed: {
    title() {
      return this.$store._modules.root.state.login.title;
    }
  },
  created() {}
};
</script>


