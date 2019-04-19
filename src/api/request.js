import 'whatwg-fetch' ;
import 'es6-promise'



const checkStatus = (response) => {
    console.warn(response);
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
    return fetch(url,options)
        .then(checkStatus)
        .then(parseJson)
        .then((data) => ({data}))
        .catch((error)=>({error}))
}