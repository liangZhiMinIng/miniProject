import {gql,assetPath} from "../../utils/http"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lowPrice:[],
    assetPath
  },
  async onLoad(){

    //添加正在加载样式
    wx.showLoading({
      title: '正在努力加载哦',
    })
    try{
    const res = await gql({
      query:`
      {
        lowPricedata{
          id
          buy
          path
          title
          writer
          writername
          copyright
          copyrightname
          nowprice
          preprice
        }
      }
      `
    })
    console.log(res.data.data)
    const {lowPricedata} =  res.data.data
    this.setData({
      lowPrice:lowPricedata
    })
  }catch(error){
    // console.log(error)
      wx.showToast({
      title: '请打开你的网络服务',
      duration: 5000,
      icon: "none"
    })
  } finally{
    //当加载成功后，关闭样式
    wx.hideLoading()
  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  
})