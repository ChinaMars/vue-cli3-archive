<template>
    <div class="register">
        <div class="inner">
            <h2>注册帐户</h2>
            <form id="register-form">
                <div class="input-box relative">
                    <input :class="{'input': true, 'is-danger': errors.has('phone')}" v-validate=" 'required|phone' " type="text" name="phone" />
                    <label>请输入手机码</label>
                    <small v-if="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</small>
                </div>
                <div class="input-box relative">
                    <input :class="{'input': true, 'is-danger': errors.has('VerificationCode')}" v-validate="'required|numeric'" type="text" name="VerificationCode" />
                    <label>请输入验证码</label>
                    <small v-if="errors.has('VerificationCode')" class="help is-danger">{{ errors.first('phone') }}</small>
                    <touch-ripple :speed="1" :opacity="0.5" color="#7b7b7b" transition="ease">
                        <van-button native-type="button" size="small">获取验证码</van-button>
                    </touch-ripple>
                </div>
                <div class="input-box relative">
                    <input v-validate="'required'" name="password" type="password" :class="{'is-danger': errors.has('password')}" placeholder="Password" ref="password">
                    <label>请输入密码(6 ~ 15位)</label>
                    <small v-if="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</small>
                </div>
                <div class="input-box relative">
                    <input v-validate="'required|confirmed:password'" name="password_confirmation" type="password" :class="{'is-danger': errors.has('password_confirmation')}" placeholder="Password">
                    <label>请输入确认密码</label>
                    <small v-if="errors.has('password_confirmation')" class="help is-danger">{{ errors.first('password_confirmation') }}</small>
                </div>

                    <div class="submit" @click="submit">
                        <touch-ripple :speed="1" :opacity="0.3" color="#fff" transition="ease">
                            <button type="button">确认</button>
                        </touch-ripple>
                    </div>

            </form>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import { Button } from 'vant'

    export default {
        name: 'registered',
        components: {
          [Button.name]: Button,
        },
        created() {

        },
        methods: {
            ...mapMutations('app',['IS_BASE_API']),
            submit() {
                this.IS_BASE_API(true)
            }
        }
    }
</script>

<style lang="less">
    .register{
        h2{
            font-size: 38px;
        }
        #register-form{
            margin-top: 40px;
        }
    }
</style>