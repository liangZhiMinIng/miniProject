// pages/home/home.js
import {gql,myfetch,assetPath}from "../../utils/http"
Page({
  data:{
    BigCategory:[],
    bookList:[] ,
    goodBookList:[],
    imgUrls:[
      '/assets/img/lunbo1.jpg',
      '/assets/img/lunbo2.jpg',
      '/assets/img/lunbo3.jpg',
      '/assets/img/lunbo4.jpg',
    ],
    current:0,
    indicatorDots: true,
    // vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 800,
    circular:true,
    userInfo:{},
    hasUserInfo:false,
    assetPath
  },
  goto(e){
    wx.navigateTo({
      url: e.target.dataset.url,
    })
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
        booktopdata(limit:5){
          id
          name
          price
          path
        }
        goodbookdata{
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
        category{
          id
          name
          path
          smallCategory{
            id
            title
            path
            preprice
            nowprice
            buy
            copyright
            copyrightname
            writer
          }
        }
      }
      `
    })
    console.log(res.data.data)
    const {booktopdata,goodbookdata,category} =  res.data.data
    this.setData({
      bookList:booktopdata,
      goodBookList:goodbookdata,
      BigCategory:category
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
onShow(){
  if(wx.getStorageSync('hasUserInfo')){
    this.setData({
      userInfo:wx.getStorageSync('userInfo'),
      hasUserInfo:wx.getStorageSync('hasUserInfo')
    })
  }else{
    this.setData({
      userInfo:{},
      hasUserInfo:false
    })
  }
},
login(){
  wx.getUserProfile({
    desc:"登陆",
    success:(data) => {
      console.log(data)
      this.setData({
        userInfo:data.userInfo,
        hasUserInfo:true
      })
      wx.setStorageSync('userInfo',data.userInfo)
      wx.setStorageSync('hasUserInfo',true)
    }
  })
},
getSmallDetail(e){
  console.log(e)
   const id = e.currentTarget.dataset.id
  wx.navigateTo({
    url: '/pages/category/category?id='+id
  })
},
getDetail(e){
  console.log(e)
  console.log(e.currentTarget.dataset.id)
  const id = e.currentTarget.dataset.id;
  // const goodBookList = e.
  wx.navigateTo({
    url: '/pages/goodBook/goodBook?id='+id
  })
}

})