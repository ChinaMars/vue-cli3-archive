import { request } from '@/axios/request'
const method = {get: 'get', post: 'post'};

export const home = () => request(
  '/home',{
    method: method.post
  }
)

export const details = (data) => request(
  '/details',{
    method: method.post,
    data: data
  }
)
