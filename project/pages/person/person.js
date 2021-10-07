import {myfetch,assetPath}from "../../utils/http"
Page({

  data:{ 
    userInfo:{},
    hasUserInfo:false,
    detailList:[
      { name:"待收款",
        path:"/assets/img/indent1.png"
      },
      { name:"待付款",
        path:"/assets/img/indent2.png"
      },
      { name:"待发货",
        path:"/assets/img/indent3.png"
      },
      { name:"待评价",
        path:"/assets/img/indent4.png"
      },
    ],
    assetPath
  },

  onLoad(){
    this.setData({
      userInfo:wx.getStorageSync('userInfo'),
      hasUserInfo:wx.getStorageSync('hasUserInfo')
    })
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

  myhandle(data){
    console.log(data)
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
        wx.setStorageSync('userInfo', data.userInfo)
        wx.setStorageSync('hasUserInfo', true)
      }
    })
  },

  logout(){
    wx.showModal({
      title: '退出操作',
      content: '确定要退出吗？',
      success: (res) => {
        if (res.confirm) {
          console.log('用户点击确定')
          this.setData({
            userInfo:{},
            hasUserInfo:false
          })
          wx.removeStorageSync('userInfo')
          wx.removeStorageSync('hasUserInfo')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
  },
  goto(e){
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
  
})