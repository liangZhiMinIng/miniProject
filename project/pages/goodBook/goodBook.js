import {gql,assetPath} from "../../utils/http"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:{},
    assetPath
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    console.log(options);
    let id = options.id;
    const res = await gql({
      query:`
      {
          goodbookdata (id:${id}) {
            id,
            path,
            title,
            writer,
            writername,
            copyright,
            copyrightname,
            nowprice,
            preprice,
            buy
          }
      }
      `
    })
    console.log(res.data)
    this.setData({
      detailObj:res.data.data.goodbookdata[0]
    })
  },
  addShop(){
    //获取本地购物车的缓存
    console.log(this.data.detailObj)
    let res = this.data.detailObj
    let carts = wx.getStorageSync('carts') || {
      carts:[],
      hasList:false
    };
    console.log(carts)
    let index = carts.carts.findIndex(v=>v.title === res.title)
    if(index===-1){
      res.num=1//添加一个数量属性
      res.selected = true;//添加一个判断是否勾选的属性
      carts.hasList = true
      carts.carts.push(res)//将本地商品添加到购物车
      console.log(10000000)
      wx.setStorageSync('carts',carts)//添加成功后储存购车

    }else{
      carts.carts[index].num++;//一样的商品数量添加
      wx.setStorageSync('carts',carts)//重新储存购物车

    }
    wx.showToast({
      title: '添加成功',
      icon:'success',
      mask:true
    })
    console.log(carts)
  }
})