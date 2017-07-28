#### 冒泡事件
> 即点击子容器，会同时激发父容器的事件————点击事件、长按事件、触摸事件、其他的submit、input.........都是非冒泡事件

#### 事件绑定
> bind 会触发冒泡事件
> catch 不会触发冒泡事件

#### 事件对象
> currentTarget 绑定当前事件的控件 
> currentTarget dataset 获取当前控件的属性
> target 激发当前事件的控件

