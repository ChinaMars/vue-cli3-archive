import request from '@/services/request'
const method = {get: 'GET', post: 'POST'};

export const home = () => request(
  `/home`,{
    method: method.post,
  }
)

export const fetchLogin = ({name,pas}) => request(
  `/login?user=${name}&pass=${pas}`,{
    method: method.get,
  }
)

export const fetchRegister = (req) => request(
  `/register`,{
    method: method.post,
    body: JSON.stringify(req),
  }
)