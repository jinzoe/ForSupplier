// pages/conractList/contractList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contracts : [{
      contractid : 1,
      contractno : 'N3827591',
      name : '合同名1',
      total : '123',
      contracttemplate : 'path'
    },{
      contractid : 1,
      contractno : 'N3827591',
      name : '合同名2',
      total : '123',
      contracttemplate : 'path'
    },{
      contractid : 1,
      contractno : 'N3827591',
      name : '合同名3',
      total : '123',
      contracttemplate : 'path'
    },{
      contractid : 1,
      contractno : 'N3827591',
      name : '合同名4',
      total : '123',
      contracttemplate : 'path'
    }],
    array1: ['本月', '本年','全部'],
    array2: ['已审核', '待审核', '全部'],
    index1: 0,
    index2: 0,
    radioItems: [
      { name: '按金额', value: '0' },
      { name: '按时间', value: '1', checked: true }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  

  },
  openContract : function(e){
    var ffilePath = e.currentTarget.dataset.pdf;
    console.log(ffilePath);
   wx.downloadFile({
    url: 'https://ruancaitong.club/assets/1.pdf',
    success: function (res) {
      var filePath = res.tempFilePath
   console.log(filePath)
      wx.openDocument({
        filePath: filePath,
        success: function (res) {
          console.log('打开pdf文档成功')
        }
      })
    }
  })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  orderDetail : function(e) {
    console.log('相关订单')
  }
})