import {request} from "./index";


export function register(account, password) {
  return request({
    method: 'post',
    url: '/api/users/register',
    params: {
      account,
      password
    }
  })
}

export function login(account, password) {
  return request({
    method: 'post',
    url: '/api/users/login',
    params: {
      account,
      password
    }
  })
}

