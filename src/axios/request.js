import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' // post请求头的设置
axios.defaults.timeout = 12000 // 请求超时时间
axios.defaults.baseURL = process.env.VUE_APP_BASE_API

axios.interceptors.request.use(config => {
  Toast.loading({
    mask: false,
    message: '加载中...'
  });
  return config
},error => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  return checkStatus(response)
},(error) => {
  return Promise.reject(checkStatus(error.response))
})

function checkStatus(response) {
  if(response){
    Toast.clear();
    const status = response.status
    if(status == 200){
      return response
    }else{
      let errMsg = ''
      switch (status) {
        case 400:
          errMsg = '错误请求'
          break;
        case 404:
          errMsg = '资源不存在';
          break;
      }
      return {
        msg: errMsg
      }
    }
  }
}

export default function request(url,{
  method = 'get',
  data = {},
  //headers = {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
  responseType = 'json'
}) {
  const defaultConfig = {
    url,
    method,
    data: method == 'get' ? data : qs.stringify(data),
    //headers,
    responseType
  }
  return axios(defaultConfig)
}