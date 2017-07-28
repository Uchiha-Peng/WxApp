var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  userName:null,
  pwd:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("page onLoad");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("page onReady");
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
    console.log("page onUnload");
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
  
  },
  usernameInput:function(event){
    //console.log(event.detail.value);
this.setData({userName:event.detail.value});
  } ,
  userpwdInput: function (event) {
    //console.log(event.detail.value);
    this.setData({ pwd: event.detail.value });
  } ,
  btnLogin: function () {
    app.globalData.userinfo = { username: this.data.userName, userpwd: this.data.pwd}
    //页面无法跳转时按照以下方法查找问题
    // 检查你要跳转的位置是否在app.js中注册过。
    // 检查你要跳转的地址是否有误。经常都是因为少写或者多写使得跳转无效。
    // 检查你要跳转的位置是否位于TabBar中，如果是的话，要使用wx.switchTab 来跳转界面
    wx.switchTab({ url: "../demo3/demo3" })
    console.log(app.globalData.userinfo)
    
  }


})