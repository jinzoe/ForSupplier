// pages/orderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderInfo : {
      plandate : '2018-05-01',
      id : '001',
      orderdeptname : '部门名',
      orderusername : '人名',
      materials :[{
        MaterialNo : '11',
        materialname : '物料物料物料物料物料物料物料物料物料物料' ,
        number : '10',
        spec : '10*10',
        price : '12'
      },{
        MaterialNo : '22',
        materialname : '物料B' ,
        number : '10',
        spec : '10*10',
        price : '12'
      },{
        MaterialNo : '33',
        materialname : '物料C' ,
        number : '10',
        spec : '10*10',
        price : '12'
      },{
        MaterialNo : '44',
        materialname : '物料D' ,
        number : '10',
        spec : '10*10',
        price : '12'
      }],
      totalmoney : '1000000',
      paymentlist : '',
      paymentmoney : '50000',
      debt : '10000'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    let id = options.id;
    this.setData({
      'orderInfo.id' : id
    })
  
  },
  newDeli : function(e) {
    wx.navigateTo({
      url : '../newDelivery/newDelivery?orderid=' + this.data.orderInfo.id
    })
  }
})