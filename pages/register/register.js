// pages/register/register.js
Page({
  data: {
    supplierInfo : {
      suppliername : "",
      suppliertype : "",
      address : "",
      phone : "",
      loginname : "",
      password : ""
    },
    repwd : "",
    showTopTips :false,
    tipContent : ""
  },
  onLoad: function (options) {

  },
  nameIn : function(e) {
   this.setData({
    'supplierInfo.suppliername' : e.detail.value
  })   
 },
 typeIn : function(e) {
   this.setData({
    'supplierInfo.suppliertype' : e.detail.value
  })   
 },
 addressIn : function(e) {
   this.setData({
    'supplierInfo.address' : e.detail.value
  })
 },
 phoneIn : function(e) {
   this.setData({
    'supplierInfo.phone' : e.detail.value
  })   
 },
 logNameIn : function(e) {
   this.setData({
    'supplierInfo.loginname' : e.detail.value
  })   
 },
 pwdIn : function(e) {
   this.setData({
    'supplierInfo.password' : e.detail.value
  })   
 },
 repwdIn : function(e) {
   this.setData({
    repwd : e.detail.value
  })   
 },
 submit : function() {
   if(this.data.repwd != this.data.supplierInfo.password){
    var that = this;
    this.setData({
      showTopTips: true,
      tipContent : '请再次确认密码'
    });
    setTimeout(function(){
      that.setData({
        showTopTips: false
      });
    }, 3000);
    // wx.showToast({
    //   title: '请再次确认密码',
    // })
  }else if(this.data.repwd == "" || this.data.supplierInfo.suppliername == "" || 
    this.data.supplierInfo.suppliertype == "" || this.data.supplierInfo.address == "" || 
    this.data.supplierInfo.phone == "" || this.data.supplierInfo.loginName == "" || 
    this.data.supplierInfo.password == ""){
    var that = this;
    this.setData({
      showTopTips: true,
      tipContent : '请填写完整信息'
    });
    setTimeout(function(){
      that.setData({
        showTopTips: false
      });
    }, 3000);
    // wx.showToast({
    //   title: '请填写完整信息',
    // })
  }else{
        //注册

        wx.showToast({
          title: '注册成功，请登录',
        })
        wx.navigateTo({
          url : '../login/login'
        })
      }
    }

  })