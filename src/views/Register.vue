<template>
    <div class="register">
        <div class="inner">
            <h2>注册帐户</h2>
            <form id="register-form">
                <div class="input-box">
                    <input :class="{'input': true, 'is-danger': errors.has('phone')}" v-validate=" 'required|phone' " type="text" name="phone" placeholder="Phone"/>
                    <small v-show="errors.has('phone')" class="fa fa-warning">{{ errors.first('phone') }}</small>
                </div>
                <div class="input-box">
                    <input v-validate="'required'" name="password" type="password" :class="{'is-danger': errors.has('password')}" placeholder="Password" ref="password">
                    <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>

                    <input v-validate="'required|confirmed:password'" name="password_confirmation" type="password" :class="{'is-danger': errors.has('password_confirmation')}" placeholder="Password">
                    <span v-show="errors.has('password_confirmation')" class="help is-danger">{{ errors.first('password_confirmation') }}</span>
                </div>
                <touch-ripple :speed="1" :opacity="0.3" color="#fff" transition="ease">
                    <button class="btn">确认</button>
                </touch-ripple>
            </form>
        </div>
    </div>
</template>

<script>
  import { Validator } from 'vee-validate';

  export default {
    name: 'registered',
    components: {

    },
    created() {
      Validator.extend('phone', {
        validate: value => {
          return /^1[34578]\d{9}$/.test(value)
        }
      });
    },
    methods: {

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