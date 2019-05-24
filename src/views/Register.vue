<template>
    <div class="register">
        <h2>注册帐户</h2>
        <form id="register-form">
            <input type="text" placeholder="email" v-validate=" 'required|email' " name="email"/>
            <div>{{ errors.first('email') }}</div>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'registered',
  }
</script>

<style scoped>

</style>