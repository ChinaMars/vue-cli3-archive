<template>
    <div class="register">
        <div class="inner">
            <h2>注册帐户</h2>
            <form id="register-form">
                <div class="input-box relative">
                    <input id="phone" :class="{'is-danger': errors.has('phone'), 'empty': registerForm.phone == ''}" v-validate=" 'required|phone' " type="text" name="phone" maxlength="11" v-model="registerForm.phone"/>
                    <label for="phone">*请输入手机码</label>
                    <small v-if="errors.has('phone')" class="help is-danger mt10">{{ errors.first('phone') }}</small>
                </div>
                <div class="input-box relative">
                    <input id="verificationCode" :class="{'is-danger': errors.has('verificationCode'), 'empty': registerForm.verificationCode == ''}" v-validate="'required|numeric'" type="text" name="verificationCode" v-model="registerForm.verificationCode"/>
                    <label for="verificationCode">*请输入验证码</label>
                    <small v-if="errors.has('verificationCode')" class="help is-danger">{{ errors.first('verificationCode') }}</small>
                    <div v-if="!sendVerificationCode" class="button-wrap verification-code-button" @click="getVerificationCode">
                        <touch-ripple>
                            <van-button native-type="button" size="small">获取验证码</van-button>
                        </touch-ripple>
                    </div>
                    <div class="button-wrap verification-code-disabled-button verification-code-button" v-else><van-button native-type="button" size="small">{{verificationCodeTime}}秒之后重新发送验证码</van-button></div>
                </div>
                <div class="input-box relative">
                    <input id="password" v-validate="'required'" name="password" type="password" :class="{'is-danger': errors.has('password'), 'empty': registerForm.password == ''}" ref="password" v-model="registerForm.password">
                    <label for="password">*请输入密码(6 ~ 15位)</label>
                    <small v-if="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</small>
                </div>
                <div class="input-box relative">
                    <input id="password-confirmation" v-validate="'required|confirmed:password'" name="password-confirmation" type="password" :class="{'is-danger': errors.has('password-confirmation'), 'empty': registerForm.passwordConfirmation == ''}" v-model="registerForm.passwordConfirmation">
                    <label for="password-confirmation">*请输入确认密码</label>
                    <small v-if="errors.has('password-confirmation')" class="help is-danger">{{ errors.first('password-confirmation') }}</small>
                </div>
                <div class="submit" @click="submit">
                    <touch-ripple style="width: 100%">
                        <van-button native-type="button" size="large">确认</van-button>
                    </touch-ripple>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import { Button } from 'vant'
    import { Dialog } from 'vant';

    export default {
        name: 'registered',
        components: {
            [Button.name]: Button,
            [Dialog.name]: Dialog
        },
        data() {
          return{
            registerForm: {
                phone:  '',
                verificationCode: '',
                password: '',
                passwordConfirmation: ''
            },
            sendVerificationCode: false,
            verificationCodeTime: 60
          }
        },
        created() {

        },
        methods: {
            /* 是否使用正式域名接口 */
            ...mapMutations('app',['IS_BASE_API']),

            /* 获取验证码弹窗 */
            getVerificationCode() {
                this.sendVerificationCode = true;

                Dialog.alert({
                    title: '验证码',
                    message: '123456'
                }).then(() => {
                    // on close
                });

                let auth_timetimer =  setInterval(()=>{
                    this.verificationCodeTime--
                    if(this.verificationCodeTime<=0){
                        this.sendVerificationCode = false
                        this.verificationCodeTime = 60
                        clearInterval(auth_timetimer)
                    }
                }, 1000);
            },

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
            margin-top: 80px;
            .verification-code-button{
                position: absolute;
                right: 0;
                top: 0;
            }
            .verification-code-disabled-button{
                button{
                    background: @gray-xl;
                }
            }
        }
    }
</style>