import request from '../api/request'


export default async(url,option) => {
  return request(url,option).then(({data,err}) =>{
    if(err){
      alert()
      return {data,err}
    }
    const isSuccess = data.status;
    if(!isSuccess){
      alert(data.msg)
    }
    return {...data,isSuccess}
  })
};