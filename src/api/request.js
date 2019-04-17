import 'whatwg-fetch' ;
import 'es6-promise'
import STRING from '../assets/strings'


const checkStatus = (response) => {
    if(response.status>=200&&response.status<=300){
        return response
    }
    let err = new Error(response.statusText);
    err.response = response
    return err
};

const parseJson = (response) => {
    return response.json(STRING.request_err_msg)
};

export default (url,options) => {
    return fetch(url,options)
        .then(checkStatus)
        .then(parseJson)
        .then((data) => ({data}))
        .catch((error)=>({error}))
}