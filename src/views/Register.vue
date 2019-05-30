<template>
    <div class="register">
        <div class="inner">
            <h2>注册帐户</h2>
            <form id="register-form">
                <input type="text" placeholder="email" v-validate=" 'required|email' " name="email"/>
                <div>{{ errors.first('email') }}</div>
                <touch-ripple :speed="1" :opacity="0.3" color="#fff" transition="ease">
                    <!-- your element... -->
                    <h1>it's a h1 title</h1>
                    <div>it's a div block</div>
                </touch-ripple>
            </form>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'registered',
    components: {

    }
  }
</script>

<style lang="less">
    .register{
        h2{
            font-size: 36px;
        }
    }
</style>