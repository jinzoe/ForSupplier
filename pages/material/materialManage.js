// pages/material/materialManage.js
Page({
  /**
             * 页面的初始数据
             */
  data: {
    showModal: false
  },
  editCatalog: function(e) {
    let catalogid = e.currentTarget.dataset.id;
    console.log('longpress' + catalogid);
    wx.showActionSheet({
      itemList: ['编辑', '删除'],
      success: function(res) {
        if (!res.cancel) {
          console.log('tapIndex' + res.tapIndex);
          if (res.tapIndex == 0) wx.navigateTo({
            url: 'editCatalog/editCatalog?mode=edit&id=' + catalogid
          });
          else if (res.tapIndex == 1) {
            //删除该类别及页面中的block快
          }
        }
      }
      })
      
    },
  toList: function(e) {
    let catalogid = e.currentTarget.dataset.id;
    console.log('catalogid' + catalogid);
    wx.navigateTo({
      url: 'materialList/materialList?catalogid=' + catalogid
    })
  },
  showDialogBtn: function() {
    this.setData({
      showModal: true
    })
  },
  /**
                     * 弹出框蒙层截断touchmove事件
                     */
  preventTouchMove: function() {},
  /**
                     * 隐藏模态对话框
                     */
  hideModal: function() {
    this.setData({
      showModal: false
    });
  },
  /**
                     * 对话框取消按钮点击事件
                     */
  onCancel: function() {
    this.hideModal();
  },
  /**
                     * 对话框确认按钮点击事件
                     */
  onConfirm: function() {
    this.hideModal();
  },
  /**
                     * 生命周期函数--监听页面加载
                     */
  onLoad: function(options) {},
  /**
                     * 生命周期函数--监听页面初次渲染完成
                     */
  onReady: function() {},
  /**
                     * 生命周期函数--监听页面显示
                     */
  onShow: function() {},
  /**
                     * 生命周期函数--监听页面隐藏
                     */
  onHide: function() {},
  /**
                     * 生命周期函数--监听页面卸载
                     */
  onUnload: function() {},
  /**
                     * 页面相关事件处理函数--监听用户下拉动作
                     */
  onPullDownRefresh: function() {},
  /**
                     * 页面上拉触底事件的处理函数
                     */
  onReachBottom: function() {},
  /**
                     * 用户点击右上角分享
                     */
  onShareAppMessage: function() {}
})