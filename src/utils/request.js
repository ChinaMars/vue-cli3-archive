import fetch from './fetch'
import STRING from '../assets/strings'
const baseUrl = 'https://www.easy-mock.com/mock/5cb593969f7c1a66a356c6ee/vue-archive'

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