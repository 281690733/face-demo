import HttpRequest from "@/utils/request"
const request = new HttpRequest()
const url = '/userinfo'
/**
 * 添加
 * @param data
 */
export const add = (data: any) => {
  return request.post(url,data)
}

/**
 * 逻辑删除
 * @param id
 */
export const deleteOne = (id: any) => {
  return request.delete(url + '/' + id)
}

export const edit = (data: any) => {
  return request.put(url,data)
}

export const getList = (params: any) => {
  return request.get(url,params)
}
