import {gql,assetPath} from "../../utils/http"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    smallCategoryObj:[],
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
       category(id:${id}){
        id
        name
        path
        smallCategory{
          id
          title
          path
          writername
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
    console.log(res.data)

    this.setData({
      smallCategoryObj:res.data.data.category[0].smallCategory
    })
  },

  
})