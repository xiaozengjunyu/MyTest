# Css 知识点巩固

## 标准盒子模型与低版本 IE 盒子的区别

标准的 w3c 盒子模型： width = 内容宽度 ( content ) + border + padding + margin 。  
低版本 IE 盒子模型： width = ( content + border + padding ) +margin 。   
两者的区别就是: w3c 盒子模型内容的宽高是 width +height ,而低版本 IE 盒子模型的内容宽高包括 content + padding +border。

## 几种解决 IE6 存在的 Bug 的方法
 * 由 float 引起的双边距的问题，使用 display 解决 。
 * 由 float 引起的 3 像素问题，使用 display: inline -3px 。
 * 使用正确的书写顺序 link visited hover active，解决超链接 hover 点击失效问题 。
 * 对于 IE 的 z-index 问题，通过给父元素增加position: relative 解决 。
 * 使用 !important 解决 Min-height 最小高度问题 。
 * 使用 iframe 解决 select 在 IE6 下的覆盖问题 。
 * 使用 over: hidden, zoom: 0.08, line-height: 1px 解决定义1px左右的容器宽度问题 。

## Css 选择符有哪些？哪些属性可以继承？
类名选择器、ID 选择器、标签选择器、后代选择器、子代选择器、通配符选择器、属性选择器、伪类选择器。   
可继承的样式属性： font-size、font-family、color、ul、li、dd、dt。  
不可继承的样式属性： border、padding、margin、width、height。 
