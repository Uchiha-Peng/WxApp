Page({
  /**
   * 页面的初始数据
   */
  data: {
    text: "这是一个页面",
    btnTxt:"Click Me",
    isShow:true,
    arrays:["Uchiha-Peng","Uchiha-Madala","Uchiha-Itachi","Uchiha-Obito"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("app onLoad");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("app onReady");
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
    btnClick: function () {
    //console.log("按钮点击事件");
    var b = this.data.isShow;
    var datas=this.data.arrays;
    datas.shift();
    this.setData({text:"我的值已经变了",isShow:!b,arrays:datas})
  },
})