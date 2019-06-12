export const messages = {
  required : (field) => `${field}是必填的`,
  email : (field) => `${field}格式不正确`,
  phone: (field) => `${field}格式不正确`,
  password: (field) => `${field}不正确`,
  confirmed: (field,e) => `${e[0]}不一致`
};

export const attributes = {
  email: "邮箱",
  phone: "手机号",
  passwordConfirmation: "密码",
  password: "密码",
  verificationCode: '验证码'
}