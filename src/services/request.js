import fetch from './fetch'
import STRING from '@/assets/strings'
const baseUrl = process.env.VUE_APP_BASE_API

export default (url,option) => {
  return fetch(baseUrl+url,option).then(({data,err}) =>{
    if(err){
      alert(STRING.request_err_msg)
      return {data,err}
    }
    const isSuccess = data.status;
    if(!isSuccess){
      alert(data.msg)
    }
    return {...data}
  })
};