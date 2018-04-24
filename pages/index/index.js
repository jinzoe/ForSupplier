//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    supplierInfo: {
      supplierName : "供应商名",
      supplierType : "SupplierType",
	    address : "山东省济南市市中区XXXXX",
	    phone : "13288886666"
    },
    newOrders : [{
      orderno : "orderno",
      plandate : "yyyy-mm-dd",
      orderdate : "yyyy-mm-dd",
      orderusername : "某人",
      orderdeptname : "某部门",
    }],
    newReceived : [{
    	receiveid :"receivedid",
    	receivedate :"yyyy-mm-dd",
    	deliverydate :"yyyy-mm-dd",
    	status :"status",
    }],
    newQA :[{
    	qualityid:"qualityid",
    	qualitydate:"yyyy-mm-dd",
    	qualityusername:"某人",
    	status :"status",
    }]

  },
  onLoad: function () {
    // var supplierInfo = wx.getStorageSync('supplierInfo');
    // console.log((supplierInfo))
    // if(!supplierInfo){
    //   wx.navigateTo({
    //     url: '../login/login',
    //   })
    // }
  },
  moreOrder :() => {
    wx.navigateTo({
      url: '../orderList/orderList'
    })
  },
  moreQA :() => {
    wx.navigateTo({
      url: '../QAList/QAList'
    })
  },
  moreDeli :() => {
    wx.navigateTo({
      url: '../deliList/deliList'
    })
  },
})
