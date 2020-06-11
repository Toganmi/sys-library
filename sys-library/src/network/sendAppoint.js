import {request} from "./index";


export function sendAppoint(no,libNum, time) {
  return request({
    method: 'post',
    url: '/api/profiles/add',
    params: {
      no,
      build:libNum,
      time
    }
  })
}
