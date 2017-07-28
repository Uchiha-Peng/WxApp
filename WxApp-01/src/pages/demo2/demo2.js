var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    arrays:null,
    imgurl:'http://mvcapi.azurewebsites.net/images/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function (options) {
    console.log("app onLoad");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 非常重要
    var thispage = this;
    app.getExpressInfo(function (data) {
      console.log(data.value);
      thispage.setData({ arrays: data.value })
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("app onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("app onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("app onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("app onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("app onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("app onShareAppMessage");
  },
  btnClick:function(event){
    console.log(event.target.dataset.name);
    console.log(event.target.dataset.src);
    wx.navigateTo({
      url: '../demo4/demo4?name=' + event.target.dataset.name + '&src=' + event.target.dataset.src,
    })

  }
})