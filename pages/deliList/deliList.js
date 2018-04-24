// pages/deliList/deliList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    delis : [{
      receiveid :"receivedid",
      receivedate :"yyyy-mm-dd",
      deliverydate :"yyyy-mm-dd",
      status :"status",
      materials : [{
        'materialname' : '物料A',
      },{
        'materialname' : '物料B',
      },{
        'materialname' : '物料C',
      }]
    }],
    array: ['未到货', '部分到货', '已到货','全部'],
    index: 0,
    radioItems: [
      { name: '按时间', value: '1', checked: true }
    ]
  },

  newDeli : ()=>{
    wx.navigateTo({
       url : '../newDelivery/newDelivery'
       //data关联订单列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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