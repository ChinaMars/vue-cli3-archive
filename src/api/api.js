import request from './request'

const method = {get: 'GET', post: 'POST'};
const headers = { 'Accept': 'application/json, text/plain, */*' }
const apiRequest = (url,option) => {
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

export default {
    fetchLogin({name,pas}){
        return apiRequest(
            `/login?user=${name}&pass=${pas}`,{
                headers,
                method: method.get,
            }
        )
    }
}