export const myfetch = (api,data) => {
  const baseUrl = "http://127.0.0.1:3000/api";
  return new Promise((resolve,reject) => {
    wx.request({
      url:baseUrl + api,  // http://127.0.0.1:3000/api/search
      method:"POST",
      header:{
        "content-type":"application/json;charset=UTF-8",
      },
      data,
      success:res => resolve(res),
      fail: err => reject(err)
    })
  })
}
export const gql = (data) => {
  const url = "http://127.0.0.1:3000/gql";
  return new Promise((resolve,reject) => {
    wx.request({
      url,
      method:"POST",
      header:{
        "content-type":"application/json;charset=UTF-8",
      },
      data,
      success:res => resolve(res),
      fail: err => reject(err)
    })
  })
}
export const assetPath = "http://localhost:3000"