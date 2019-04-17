<template>
  <div>
    <label>姓名</label>
    <input v-model="name">
    <label>密码</label>
    <input v-model="pas">
    <button @click="this.submit">提交</button>
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
      api.fetchLogin({ name: this.name, pas: this.pas });
    }
  },

  created() {}
};
</script>


