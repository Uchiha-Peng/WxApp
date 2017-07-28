//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getExpressInfo: function (cb) {
    wx.request({
      url: 'http://mvcapi.azurewebsites.net/GetProducts',
      data: {},
      header:{
        'content-type': 'application/json'
      },
      success: function (res) {
        // console.log(res.data)
        cb(res.data)
      }
    })

  },

  globalData: {
    userInfo: null
  }
})