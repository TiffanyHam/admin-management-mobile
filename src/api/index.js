import request from "@/axios/request";
// import qs from 'qs'

export function info(params) {
  return request({
    url: "/api/getprodlist",
    method: "get",
    params
  });
}
export function tabConstant(params) {
  return request({
    url: "/api/constant",
    method: "get",
    params
  });
}
