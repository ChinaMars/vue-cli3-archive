export const messages = {
  required : (field) => `${field}是必填的`,
  email : (field) => `${field}格式不正确`,
  phone: (field) => `${field}格式不正确`,
  password: (field) => `${field}不正确`,
  confirmed: (field,e) => `不能和${e[0]}匹配`
};

export const attributes = {
  email: "邮箱",
  phone: "手机号",
  password_confirmation: "密码",
  password: "密码"
}