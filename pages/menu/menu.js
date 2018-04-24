// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  scan : ()=>{
    wx.scanCode({
      success: (res) => {
        wx.navigateTo({
          url : '../scanCode/scanCode?res=' + res.result
        })
        console.log(res);
      }
    })
  }
  })