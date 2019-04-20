<template>
  <div>
    <h1>{{title}}</h1>
    <label>姓名</label>
    <input v-model="name">
    <label>密码</label>
    <input v-model="pas">
    <button @click="this.submit">提交</button>
    <button @click="this.register">注册</button>
  </div>
</template>




<script>
import api from "../../api/api";

export default {
  name: "Login",
  data() {
    return {
      name: "",
      pas: ""
    };
  },

  methods: {
    submit() {
      api.fetchLogin({ name: this.name, pas: this.pas }).then(res => {
        if(res.isSuccess){
          this.$toast.success('登陆成功，fuck you ')
        }
      });
    },
    register() {
      api.fetchRegister({ name: this.name, pas: this.pas }).then(res => {
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


