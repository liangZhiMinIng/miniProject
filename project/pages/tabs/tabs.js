Page({
  data:{
    current:"0"
    
  },
  onLoad: function () {
   console.log(this.data)
   this.setData({
    menuTapCurrent:this.data.current
  })
  },

  menuTab(e){
    console.log(e.currentTarget)
    var current = e.currentTarget.dataset.current
    //改变menuTapCurrent当前的值为当前选中的current值
    this.setData({
      menuTapCurrent:current
    })
  }
})