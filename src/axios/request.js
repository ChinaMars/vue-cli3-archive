import axios from 'axios'
import qs from 'qs'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' // post请求头的设置
axios.defaults.timeout = 12000 // 请求超时时间
axios.defaults.baseURL = process.env.VUE_APP_BASE_API

axios.interceptors.request.use(config => {
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
    const status = response.status
    if(status == 200){
      return response
    }else{
      let errMsg = ''
      switch (status) {
        case 400:
          errMsg = 'XXX'
          break
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
    data: qs.stringify(data),
    //headers,
    responseType
  }
  return axios(defaultConfig)
}