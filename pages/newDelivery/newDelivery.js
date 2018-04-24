// pages/newDelivery/newDelivery.js
Page({

  /**
   * 页面的初始数据
   */
   data: {
     delid : '',
    deliveryWays : [{
      name : '物流发货',
      checked : true,
      value : 0
    },{
      name : '自行发货',
      checked : false,
      value : 1
    }],
    deliPics : [],
    orderid : '',
    deliveryInfo : {
      DeliveryDate : '',
      LogisticsCompany : '',
      TrackingNumber : '',
      ConsignmentVoucher : '',//发货凭证
      PurchaseOrder : ''//关联订单
    }
  },
  onLoad: function (options) {
     if(options.orderid){
      this.setData({
        orderid : options.orderid
      })
     }
     if (options.id) {
       this.setData({
         delid: id
       })
       //取出该条信息修改
     }
  },
  radioChange: function (e) {
    var deliveryWays = this.data.deliveryWays;
    for (var i = 0, len = deliveryWays.length; i < len; ++i) {
      deliveryWays[i].checked = deliveryWays[i].value == e.detail.value;
    }

    this.setData({
      deliveryWays: deliveryWays
    });
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          deliPics: that.data.deliPics.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function(e){
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.deliPics // 需要预览的图片http链接列表
    })
  },
  deletePic : function(e) {
    var index = e.currentTarget.dataset.index;
    this.data.deliPics.splice(index,1);
    var deliPics = this.data.deliPics;
    this.setData({
      deliPics : deliPics
    })
    console.log(this.data.deliPics)
    console.log(deliPics)
  },
  companyIn :function(e) {
   this.setData({
    'deliveryInfo.LogisticsCompany' : e.detail.value
  })
 },
 numberIn : function(e) {
   this.setData({
    'deliveryInfo.TrackingNumber' : e.detail.value
  })
 },
 memoIn : function(e) {
     //暂无字段存储备注信息
     // this,.setData({

     // })
   },
 scan: () => {
   wx.scanCode({
     success: (res) => {
       var code = res.result;
       console.log(code);
       this.setData({
         'deliveryInfo.TrackingNumber': code
       })
      //  wx.navigateTo({
      //    url: '../scanCode/scanCode?res=' + res.result
      //  })
     }
   })
 },

   submit : function() {
    var that = this;
    //将发货凭证的图片上传
    var savedFilePath = new Array;
    // for (var i = that.data.deliPics.length - 1; i >= 0; i--) {      
    //  wx.uploadFile({
    //   url: ''
    //   filePath: deliPics[i],
    //   name: 'file',
    //   formData:{
    //     'user': 'test'
    //   },
    //   success: function(res){
    //     var data = res.data
    //     //do something
    //   }
    // }
    
     var orderNo = this.data.orders[this.data.orderid].orderNo;
     var date = new Date();
     var dateF = date.getFullYear() + '/' + date.getMonth()+1 + '/' + date.getDate();
     this.setData({
      'deliveryInfo.PurchaseOrder' : orderNo,
      'deliveryInfo.DeliveryDate' : dateF,
      'deliveryInfo.ConsignmentVoucher' : savedFilePath
    })

    if(this.data.delid != ''){
      //update
    }else{
      //add
    }

     console.log(this.data.deliveryInfo)
   }

 })