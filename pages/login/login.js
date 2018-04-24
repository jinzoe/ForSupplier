// pages/login/login.js
Page({
  data: {
    username : "",
    password : ""
  },

  onLoad: function (options) {
  
  },
  usernameIn : function(e){
    this.setData({
      username : e.detail.value
    })
  },
  passwordIn : function(e) {
    this.setData({
      password : e.detail.value
    })
  },
  login : function() {
    // wx.redirectTo({
    //   url: '../index/index'
    // })
    wx.switchTab({
      url: '../index/index',
    })
  }
})