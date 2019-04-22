import fetch from './fetch'
import STRING from '../assets/strings'


export default async(url,option) => {
  return fetch(url,option).then(({data,err}) =>{
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