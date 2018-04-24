// pages/orderList/orderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode : 'normal',
    orders : [{
      uid : "orderno1",
      plandate : "yyyy-mm-dd",
      orderdate : "yyyy-mm-dd",
      orderusername : "某人",
      orderdeptname : "某部门",
    },{
      uid : "orderno2",
      plandate : "yyyy-mm-dd",
      orderdate : "yyyy-mm-dd",
      orderusername : "某人",
      orderdeptname : "某部门",
    }],
    array1: ['本月', '本年','全部'],
    array2: ['未交货', '已交货', '全部'],
    index1: 0,
    index2: 0,
    radioItems: [
      { name: '按金额', value: '0' },
      { name: '按交货时间', value: '1', checked: true }
    ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.mode){
      this.setData({
        mode : options.mode
      })
    }
  },

  clickOrder : function(e) {
    var orderid = e.currentTarget.dataset.id;
    if(this.data.mode == 'select'){
      console.log('select'+orderid);
      let pages = getCurrentPages();
      let prePage = pages[pages.length-2];
      prePage.setData({
        orderid : orderid
      });
      wx.navigateBack();
    }
    else
      wx.navigateTo({
        url :'../orderDetail/orderDetail?id='+orderid
      })
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