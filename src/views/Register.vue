<template>
    <div class="register">
        <div class="inner">
            <h2>注册帐户</h2>
            <form id="register-form">
                <div class="input-box relative">
                    <input id="phone" :class="{'input': true, 'is-danger': errors.has('phone')}" v-validate=" 'required|phone' " type="text" name="phone" />
                    <label for="phone">*请输入手机码</label>
                    <small v-if="errors.has('phone')" class="help is-danger mt10">{{ errors.first('phone') }}</small>
                </div>
                <div class="input-box relative">
                    <input id="VerificationCode" :class="{'input': true, 'is-danger': errors.has('VerificationCode')}" v-validate="'required|numeric'" type="text" name="VerificationCode" />
                    <label for="VerificationCode">*请输入验证码</label>
                    <small v-if="errors.has('VerificationCode')" class="help is-danger">{{ errors.first('phone') }}</small>
                    <div class="button-wrap verification-code-button">
                        <touch-ripple>
                            <van-button native-type="button" size="small">获取验证码</van-button>
                        </touch-ripple>
                    </div>
                </div>
                <div class="input-box relative">
                    <input id="password" v-validate="'required'" name="password" type="password" :class="{'is-danger': errors.has('password')}" ref="password">
                    <label for="password">*请输入密码(6 ~ 15位)</label>
                    <small v-if="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</small>
                </div>
                <div class="input-box relative">
                    <input id="password-confirmation" v-validate="'required|confirmed:password'" name="password-confirmation" type="password" :class="{'is-danger': errors.has('password-confirmation')}">
                    <label for="password-confirmation">*请输入确认密码</label>
                    <small v-if="errors.has('password-confirmation')" class="help is-danger">{{ errors.first('password-confirmation') }}</small>
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
            font-size: 48px;
        }
        .inner{
            padding: 100px 50px 50px 50px;
        }
        #register-form{
            margin-top: 40px;
            .verification-code-button{
                position: absolute;
                right: 0;
                top: 0;
            }
        }
    }
</style>