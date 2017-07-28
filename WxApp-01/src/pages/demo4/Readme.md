#### 生命周期
> app.js里可以声明全局方法和变量，在页面中通过getApp方法获取app对象进行调用

#### 页面加载方法顺序分别是：
> onLoad 页面开始加载数据
> onShow 绑定数据
> onReady 页面已经正常显示
> onHide 页面 页面处于后台状态
> onUnload 页面被卸载

#### 页面跳转并传值
> wx.navigateTo({ url:"../demo2/demo2?id=1" }) 从当前页跳转到指定页面，当前页被隐藏，可返回
> wx.redirectTo({ url:"../demo2/demo2?id=1" })  用新的页面直接替换当前页面，当前页直接被卸载，无法返回
> 在页面中用navigatior组件

  <navigatior url="../demo2/demo2?id=1">
  <view>xxxx</view>
  </navigator>
> 若要实现redirectTo的效果，则只需要在navigator中加入redirect属性即可

#### 页面获取传值
> 在onLoad方法中获取 options的某个值