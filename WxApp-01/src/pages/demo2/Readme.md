#### wx.request CallBack，Header都不能少
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

#### 渲染试图拼接字符串 
>  <image src="http://mvcapi.azurewebsites.net/images/{{item.photoSrc}}"></image>

#### 获取app.js中的方法，必须要先调用getApp方法
>   var app = getApp()

#### 把接口数据赋值给data，必须声明thispage
>    // 非常重要
    var thispage = this;
    app.getExpressInfo(function (data) {
      console.log(data.value);
      thispage.setData({ arrays: data.value })
    });
