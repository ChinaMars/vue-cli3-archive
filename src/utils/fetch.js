import 'whatwg-fetch' ;
import 'es6-promise'
const headers = { 'Accept': 'application/json, text/plain, */*' }


const checkStatus = (response) => {
    if(response.status>=200&&response.status<=300){
        return response
    }
    let err = new Error(response.statusText);
    err.response = response
    return err
};

const parseJson = (response) => {
    return response.json()
};

export default (url,options) => {
    return fetch(url,Object.assign(options,headers))
        .then(checkStatus)
        .then(parseJson)
        .then((data) => ({data}))
        .catch((error)=>({error}))
}