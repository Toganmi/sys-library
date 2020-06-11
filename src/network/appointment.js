import {request} from "./index";

export function getappointmentlist(id) {
  return request({
    url: '/api/profiles',
    params:{
      id
    }
  })
}