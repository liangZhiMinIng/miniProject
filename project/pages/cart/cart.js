import {gql,assetPath} from "../../utils/http"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    assetPath,
    carts:[], 
    num:0,
    hasList:false,
    totalPrice:0,
    selectAllStatus:true,
  },
  onLoad(){
    // const carts=[]
    // wx.setStorageSync('carts', carts)
    // const carts=[
      // {id:1,
      //   title:'小说1',
      //   image:"/assets/img/goobook.jpg",
      //   num:3,
      //   price:8.8,
      //   selected:true
      // },
      //   {id:2,
      //   title:'小说2',
      //   image:"/assets/img/goobook02.jpg",
      //   num:1,
      //   price:9.8,
      //   selected:true
      // }
    // ]
    // wx.setStorageSync('carts',carts)
  },
  goto(e){
    wx.switchTab({
      url: e.target.dataset.url,
    })
  },

  onShow: function () {
    const dataList = wx.getStorageSync('carts')
    console.log(dataList)
    this.setData({
      carts:dataList.carts,
      hasList:dataList.hasList  
    });
    this.getTotalPrice();
    
  },
  //当商品选中事件
  selectList(e){
    // console.log(e.currentTarget)
    let selectAllStatus = this.data.selectAllStatus;//获取全部选择状态为的数据
    const index = e.currentTarget.dataset.index;//获取数据传来的index
    let carts = this.data.carts;//获取购物车列表
    const selected = carts[index].selected;//获取当前商品的选中状态
    carts[index].selected = !selected;//点击事件后改变状态
    // 只有都选了全选按才全选
    let res = carts.every(item=>{
      return item.selected == true
    })
    selectAllStatus = res == true? true:false
    this.setData({
      carts:carts,
      selectAllStatus:selectAllStatus
    });
    
   
    this.getTotalPrice();
  },
  //删除购物车商品
  delList(e){
    const index = e.currentTarget.dataset.index;//获取数据传来的index
    let carts = this.data.carts;//获取购物车列表
    carts.splice(index,1);
    this.setData({
      carts:carts
    })
    this.getTotalPrice();
  },
  //购物车全选事件
  selectAll(e){
    let selectAllStatus = this.data.selectAllStatus;//获取全部选择状态为的数据
    selectAllStatus = !selectAllStatus//改变状态
    let carts = this.data.carts;//获取购物车列表
    for(let i = 0; i<carts.length; i++){
       carts[i].selected = selectAllStatus //改变所有商品的状态为全选
    }
    this.setData({
      selectAllStatus:selectAllStatus,
      carts:carts
    });
    this.getTotalPrice();
  },
  //增加数量
  addCount(e){
    // console.log(e)
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;//获取购物车列表
    let num = carts[index].num;
    num +=1;
    if(num>5){
      wx.showToast({
        title: '限购五本哦',
        icon:"none"
      })
      return false
    }
    carts[index].num = num;
    this.setData({
     carts:carts,
    });
    this.getTotalPrice();
  },
  //减少数量
  subCount(e){
    const index = e.currentTarget.dataset.index;
    let obj = e.currentTarget.dataset.obj
    let carts = this.data.carts;//获取购物车列表
    let num = carts[index].num;
    if(num<=1){
      wx.showToast({
        title: '已经是最少了',
        icon:"none"
      })
      return false
    }
    num -=1;
    carts[index].num = num;
    this.setData({
     carts:carts,
    });
    this.getTotalPrice();
  },
  //计算总价
  getTotalPrice(){
    let carts = this.data.carts ? this.data.carts : [];//获取购物车列表
    let total = 0;
    for(let i = 0;i<carts.length; i++){//遍历所有购物车列表得到每个数据
      if(carts[i].selected){//选中情况下才会计算价格
        total += carts[i].num * carts[i].nowprice;//将所有价格合起来
      }
    }
    this.setData({
      carts:carts,
      //指定返回的小数位数可以四舍五入
      totalPrice:total.toFixed(2)
    })

  }

})