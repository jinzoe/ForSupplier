Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid: '',
    materialno : '',
    materialname : '',
    description : '',
    cataloguid : '',
    spec : '',
    unit : '',
    photo: '',
    price : '',
    maxprice : '',
    minprice : '',
    priceunit : '',
    costprice : '',
    barcode : '',
    relate : '',
    relatename : '',
    catalogs : [],
    canberelated : [],
    isRelated : false 
  },
  onLoad: function (options) {
    if (options.mode == 'edit' && options.id) {
      this.setData({
        //取出该条信息set
      })
    }
    //所有类别和可关联的物料
    wx.request({

    })
  },
  radioChange: function (e) {
    // var deliveryWays = this.data.deliveryWays;
    // for (var i = 0, len = deliveryWays.length; i < len; ++i) {
    //   deliveryWays[i].checked = deliveryWays[i].value == e.detail.value;
    // }
    if(e.detail.value == 1){
      this.setData({
        isRelated : true
      })
    }else{
      this.setData({
        isRelated : false
      })
    }

    // this.setData({
    //   deliveryWays: deliveryWays
    // });
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          photo: res.tempFilePaths
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.photo // 需要预览的图片http链接列表
    })
  },
  textIn : function(e) {
    let prop = e.currentTarget.dataset.prop;
    this.setData({
      prop : e.detail.value
    })
  },
  scan: function(){
    let that =this;
    wx.scanCode({
      success: (res) => {
        var code = res.result;
        console.log(code);
        that.setData({
          'barcode': code
        })
      }
    })
  },
  submit: function () {
    var that = this;
    //将图片上传
    var savedFilePath = new Array;
    //  wx.uploadFile({
    //   url: ''
    //   filePath: photo,
    //   name: 'file',
    //   formData:{
    //     'user': 'test'
    //   },
    //   success: function(res){
    //     var data = res.data
    //     //do something
    //   }

    var orderNo = this.data.orders[this.data.orderid].orderNo;
    var date = new Date();
    var dateF = date.getFullYear() + '/' + date.getMonth() + 1 + '/' + date.getDate();
    this.setData({
      'deliveryInfo.PurchaseOrder': orderNo,
      'deliveryInfo.DeliveryDate': dateF,
      'deliveryInfo.ConsignmentVoucher': savedFilePath
    })

    if (this.data.delid != '') {
      //update
    } else {
      //add
    }

    console.log(this.data.deliveryInfo)
  }

})