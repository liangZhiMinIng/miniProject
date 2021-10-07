

Page({
  data:{
    content:"",
    searchHistory:[]
  },
  onShow(){
    const history = wx.getStorageSync("history");
    console.log(history);
    this.setData({
      searchHistory:history
    })
  },
 
  search(e){
    if(this.data.content == ""){
      wx.showToast({
        title: '请输入查询内容',
        icon:'none'
      })
    }else{
      const history = wx.getStorageSync('history')
      if(history){
        //因为之前使用过，所以本地缓存有历史数组
        // history.push(this.data.content)
        // wx.setStorageSync('history', history）
        if(history.indexOf(this.data.content)<0){
          wx.setStorageSync('history', [this.data.content,...history])
        }else{
          /*
          1.将历史内容删除
          2.将本次的内容放在搜索数组的第一位
          */
        //  wx.removeStorageSync('history')
        //  this.setData({
        //   content:""
        //  })
        //    wx.setStorageSync('history', [this.data.content,...history])
       
         
         
        }
      }else{
        //之前没用过，直接将内容增加
        wx.setStorageSync('history', [this.data.content])
      }
    }
    this.goto(e)
  },
  quicksearch(e){
    this.setData({
      content:e.target.dataset.content
    })
    this.goto(e)
  },
  goto(e){
    wx.navigateTo({
      url: e.target.dataset.url+"?content="+this.data.content,
    })
  },
  delHistory(){
    wx.removeStorageSync('history')
    this.setData({
      searchHistory:[]
    })
  }
})