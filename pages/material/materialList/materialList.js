// pages/material/materialList/materialList.js
const App = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    materials : [{
      uid : 'N213',
      materialno : 'no1233',
      materialname : 'nameeeeeeeeee',
      photo : '../../../image/it.png',
      price  : 11

    },{
      uid : 'N213',
      materialno : 'no1233',
      materialname : 'nameeeeeeeeee',
      photo : '../../../image/it.png',
      price  : 11

    }],
    array2: ['类别1', '类别2', '类别3'],
    index2: 0,
    radioItems: [
      { name: '按单价', value: '0' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  touchS: function (e) {  // touchstart
    console.log(e)
    let startX = App.Touches.getClientX(e)
    startX && this.setData({ startX })
  },
  touchM: function (e) {  // touchmove
    let materials = App.Touches.touchM(e, this.data.materials, this.data.startX)
    materials && this.setData({ materials })
  },
  touchE: function (e) {  // touchend
    const width = 260  // 定义操作列表宽度
    let materials = App.Touches.touchE(e, this.data.materials, this.data.startX, width)
    materials && this.setData({ materials })
  },
  itemDelete: function (e) {  // itemDelete
    let materials = App.Touches.deleteItem(e, this.data.materials)
    materials && this.setData({ materials })
  },

  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})

