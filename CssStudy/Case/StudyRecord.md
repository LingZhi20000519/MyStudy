# 1. 什么是CSS

CSS (Capcading Style Sheets 的缩写)，翻译为“层叠样式表”或者“级联样式表”，简称样式表。
用来它主要是用来给 HTML 网页来设置外观或者样式。

# 2. 语法规则

CSS 代码是由选择器和一对括号组成
大括号里面是有一条一条的声明语句组成
每一条语句都要使用英文状态下面的分号
每一条语句是有“属性：值”组成
CSS 中的属性值一般不加引号。
在 CSS 中如果属性值为数值型数据的时候，一般情况下需要加单位，单位一般都是 px（像素）
在 CSS 中不能出现 HTML 标签。

h1{color:red;font-size:14px;}

# 3. 书写方式

嵌入：嵌入在html文件中，通过Style标签。[例子](0CSS%E5%85%A5%E9%97%A8.html)
外联：写一个以.css为扩展名的文件，在HTML中用 `<Link>`引入
行内：写在html标签中

感觉外联模式比较多，html标签专注于格式，CSS专注于样式。

# 4. 注释

CSS的注释有点像C++
/*内容*/

# 5. 基本选择器

选择器通过一定规则选择固定的html标签。
基本选择器有四种

| 选择器     | 格式                    | 含义                                                                                    | 举例                    |
| ---------- | ----------------------- | --------------------------------------------------------------------------------------- | ----------------------- |
| 通用选择器 | *{属性：值；}           | 通用选择器，将匹配HTML所有标签。不建议使用。IE6不支持，给大型网站增加负担               | *{margin:0px;}          |
| 标签选择器 | 标签名{属性:值;}        | 标签选择器，匹配对应的HTML标签                                                          | p{font-size:14px;}      |
| 类选择器   | .class属性值{属性:值；} | 类选择器，给拥有指定的CLASS属性值的元素设置样式                                         | .box{width:800px;}      |
| Id选择器   | #id属性值{属性:值;}     | Id选择器可以为标有特定ID的HTML元素指定特定的样式，只能使用一次。ID选择器以”#”来定义。 | #title{font-size:14px;} |

# 6. 尺寸属性

height:高度
width:宽度

# 7. 文本属性

color: #ff0000 或 red 或 rgb(3,5,8):给文本设置颜色。
text-align:left(居左)、right(居右)、center(居中）:设置文本的水平对齐方向。
text-decoration：none(去掉文本修饰线)、设置文本修饰线。underline(下划线),、overline(上划线)、line-through(删除线)：设置文本修饰线
text-transforme：capitalize、uppercase 、lowercase：大小写转换或者首字母大写
Line-height： 固定值或百分比：设置行高
text-indent：px 或者 em：设置首行缩进允许负值。
letter-spacing：px：设置字符间距
word-spacing：px：设置单词间距

# 8. 字体属性

> 属性名：font-stylee 值：normal(正常)、(italic)斜体 功能：设置文本为斜体。
>
> 属性名：font-weight 值 normal(正常)、bolde 功能：设置文字粗细。
>
> 属性名：font-size 值：如12 px、14 px。功能：给文本设置大小。
>
> 属性名：font-family 值：微软雅黑、楷体、宋体.... 功能： 给文本设置字体。
>
> 属性名：font 值：举例：font:italic bold 14px“微软雅黑 功能：简写属性能够同时给文本设置斜体、加粗、大小、字体每一个值之间需要使用空格 并且一定要有顺序。
>
> 关于字体：一般很特殊的字体 网站上面都是使用图片来表示。是否能够显示此字体是根据用户电脑里面是否有对应的字体文件，如果没有该文件就会显示为宋体。

# 9. 复合选择器

| 选择器                                 | 含义                                                             | 举例                             |
| -------------------------------------- | ---------------------------------------------------------------- | -------------------------------- |
| 选择器1，选择器2{属性：值}多元素选择器 | 多元素选择器同时匹配选择器1和选择器2，多个选择器之间用逗号分隔   | p,h1,h2{marqin:0px}              |
| E F{属性：值}后代元素选择器            | 后代元素选择器，匹配所有属于E元素后代的F元素，E和F之间用空格分隔 | #slidebar p{font-color:#990000:} |
| E>F{属性：值；}子元素选择器            | 子元素选择器，匹配所有E元素的子元素F                             | div>p{color:#990000;}            |
| E+F{属性：值；}相邻元素选择器          | 相邻元素选择器，匹配所有紧随E元素之后的同级元素F                 | div+div{color:#990000；}         |

# 10. 列表属性

| 属性                | 值                                                                                | 含义                         |
| ------------------- | --------------------------------------------------------------------------------- | ---------------------------- |
| list-style-type     | none (将列表前面的项目符号去掉),disc (实心圆),square (实心小方块),circle (空心圆) | 设置列表前项目符号的类型。   |
| list-style-position | inside (在里面), outside (在外面)                                                 | 设置列表项标记的放置位置。   |
| list-style-image    | url (图像路径)                                                                    | 将图象设置为列表项标记。     |
| list-style          | square inside url(arrow.gif)                                                      | 在一个声明中设置所有列表属性 |

# 11.伪类选择器

**1.什么是伪类选择器？**

**伪类选择器是用来给超级链接的不同状态来设置样式。**

正常状态       超级链接没有被访问 **:link**

访问过后状态   超级链接已经被访问 **:visited.**

鼠标放上状态   鼠标放在超级链接上面，但是并没有将鼠标的左键按下去 ：**hover**

激活状态 鼠标左键已经按下去了，但是并没有将鼠标的左键弹出 : active

伪类选择器都是带有冒号“：”

| **选择器**   | **含义**                                     |
| ------------------ | -------------------------------------------------- |
| **:link**    | **向未被访问的链接添加样式。**               |
| **:visited** | **向已被访问的链接添加样式。**               |
| **:hover**   | **当鼠标悬浮在元素上方时，向元素添加样式。** |
| **:active**  | **鼠标放在元素上面时，点击的一瞬间**         |

**注意：超级链接的不同状态它其实是有顺序。也就是说伪类选择器设置其实是有顺序。**

**如果不按照伪类选择器的顺序，那么样式就会失效。**

**顺序：要遵守**“**爱恨准则**”**要先有爱，才有恨。“Love Hate”**

# 12.属性选择器

内容介绍

**一.属性选择器**

**什么是属性选择器？**

**属性选择器它是与标签的属性名和属性值有关。+**

**属性选择器是通过标签的属性名和属性值来匹配元素。**

**attr** **是英文单词“attribute”的简写，中文意思“属性”属性名~**

**val** **是英文单词“value”的简写，中文意思是“值”属性值~**

[attr] 匹配指定的属性名的所有元素

[attr="val"] 匹配属性的值等于指定值的所有元素

[attr^="val"] 匹配属性的值以指定值开头的所有元素

[attr$="val"] 匹配属性的值以指定值结束的所有元素

[attr*="val"] 匹配属性的值中包含指定值的所有元素

# 13.继承性

1 外层元素身上的样式会被内层元素所继承

2如果内层元素与外层元素身上的演示相同时，外层元素的样式会被内层元素所覆盖

**是不是所有样式都能被继承？**

**答：并不是所有样式能被继承，只有文本与字体样式属性能被继承，其他样式属性不能被继承**

**解释如下：**

`<span class="lake-fontsize-1515">body{</span>`

`<span class="lake-fontsize-1515">color: #f00;</span>`

`<span class="lake-fontsize-1515">font-size: 36px;</span>`

`<span class="lake-fontsize-1515">}</span>`

`<span class="lake-fontsize-1515">div</span>``<span class="lake-fontsize-1515">{</span>`

`<span class="lake-fontsize-1515">coLor: #00f;</span>`

`<span class="lake-fontsize-1515">/*</span>``<span class="lake-fontsize-1515">给div标签来一个边框*/</span>`

`<span class="lake-fontsize-1515">border</span>``<span class="lake-fontsize-1515">：1px solid #ccc</span>`

`<span class="lake-fontsize-1515">}</span>`

`<span class="lake-fontsize-1515"></style></span>`

`<span class="lake-fontsize-1515"></ head></span>`

`<span class="lake-fontsize-1515"><body></span>`

**给 div 标签来一个边框  border：1px solid #ccc**

**div** **标签相对于 h2 标签和p 标签来说 它是一个外层元素**

**现在给外层元素设置一个边框的样式 这个边框会不会被继承**

**如果会 h2 和 p 标签都会有一个边框**

# 14.优先级

**行内样式**> ID **选择器**>**类选择器**>**标签选择器**

**一般而言，选择器指向的越准确，优先级就会越高，通常我们会用**1**表示标签选择器的优先级，用**10**来表示类选择器的优先级，用**100**来表示** **ID** **选择器的优先级，用**1000**来表示行内样式**

**标签选择题** 1

**类选择器** 10

**ID**选择器 100

**行内样式  1000**

**值越大表示其优先级越高。**

**不管是单个选择器还是多个选择器组合他们之前的优先级都可以通过上面这个公式来进行计算，我们将其只称之为权重值权重值越大，就会表示其优先级越高。**

# 15.!important

它主要是用来提升属性的女重。其属性的权重值无穷大.

`!important属性的语法格式`

`属性：值 !important`

**使用！important 一定要注意以下几点：**

1，！important 它是提升的属性的权重，而不是提升选择器的权重！

2，！important 它不能提升继承过来的权重!

# 16.一个标签携带多个类名

**类名指的是 class 的属性值。**

**一个标签内可以携带多个类名，指的是 class 的属性值可以有多个，每一个属性值之间使用空格分隔。**

**例子：**

**<标签名 class = ”值1 值2 值3”></标签名>**

**多个类名的优点：**

1 减少 css 的代码量

2 多个类名的样式会叠加到当前元素上面

# 17.背景样式属性

| **属性**                  | **值**                                        | **含义**                                             |
| ------------------------------- | --------------------------------------------------- | ---------------------------------------------------------- |
| **background-color**      | **#ff0000**、red.rgb(255,0,0)                 | **背景颜色**                                         |
| **background-image**      | **url(**图像路径和名称);                            | **背景图像**                                         |
| **background-repeat**     | **repeat**、repeat-x、repeat-y、no-repeat     | **背景图像是否重复**                                 |
| **background-position**   | **center center**或 x% y% 或 xpos ypos        | **背景图像起始位置**                                 |
| **background-attachment** | **scroll (**滚动)、fixed (固定)                     | **设置背景图像是否固定或者随着页面的其余部分滚动。** |
| **background**            | **url(1.ipga) no-repeat center center fixed** | **设器背景的简写形式**                               |

设置背景颜色，设置背景图片。

背景图片可以设置设置，是否重复，起始位置，是否固定之类的.

background-attachment的scroll，背景随着滚动条移动

background-attachment的fixed，背景固定不动

background-position用水平和垂直两个方向的值来固定。

# 18.标准文档流

**在制作的 HTML 网页和 PS 画图软件画图时有本质上面的区别:**

**HTML** **网页在制作的时候都得遵循一个“流的规则:从左至右、从上至下。**

**使用 Ps 软件画图时可以在任意地方画图。**

**1.  **空白折叠现象

**消除空白：让这些元素放在同一行，使这些元素紧密相连。**

**2.**高矮不齐，底部对齐

# 19.浮动

**需求:**

**能够实现让多个元素排在同一行，并且给这些元素设置宽度与高度!让多个元素排在同一行:行内元素的特性**

**给这些元素设置宽高:块级元素的特性**

**在标准文档流中的元素只有两种:块级元素和行内元素。如果想让一些元素既要有块级**

**元素的特点也要有行内元素的特点，只能让这些元素脱离标准文档流。**

**浮动可以让元素脱离标准文档流就可以实现让多个元素排在同一行并且可以设置宽高!**

**浮动它是通过一个浮动属性来实现**

**float:这个属性有两个值left(向左浮动)向左移动、right(向右浮动)**

**向右移动浮动元素的特性:**

**l  **浮动元素它脱离标准文档流它不再占用空间了

**l  **我们可以把浮动元素理解为“漂”

**l  **浮动元素它的层级要比标准文档流里面的元素层级要高，它会将标准文档流中的元素给压盖住

**l  **浮动元素它遇到了父元素的边框然后就停止了浮动

**l  **浮动元素它还会遇到上一个浮动元素后就停止了浮动

**l  **浮动元素浮动以后 其父元素不会再包裹着浮动元素

**l  **我们将行内元素进行浮动以后 那么这个行内元素它会变成块级元素

## 一些要点

浮动通过属性float实现。

浮动可以让块状元素在同一行。

浮动在标准文档里上一层。

行内元素浮动之后会成为块状元素。

# 20.清除浮动

### 一、为什么要清除浮动

**经过浮动的元素，会影响到下面的元素的排版布局，浮动元素的父元素没有将浮动元素包裹着。**

**清除了浮动不会影响到浮动元素的下面进行排版布局﹐浮动元素的父元素会将浮动元素从视觉上包裹着。**

---

### 二、清除浮动的方法

 **1.** **给浮动元素的父元素设置一个固定的高度。（不建议使用）**

一个元素的高度一般情况下不是手动设置的，是由其自身的内容来撑高的。

**2.使用清除浮动的样式属性 clear**

**clear** **是专用于来清除浮动 clear 有三个值 clear:left; 清除左浮动 clear:r ight; 清除右浮动 clear:both; 两者都清除**

**clear** **一般是用在最后一个浮动元素的下面**

**在最后一个浮动元素的下面新建一个空白的 div ，里面不放置内容，只用作清除浮动。**

**3.使用 overflow:hidden 这个属性来清除浮动**

**overflow** **是一个属性 overflow:hidden 原意是用来将溢出的部分进行隐藏  还可以用于清除浮动**

## 个人觉得重要的地方

清除浮动的原因

1浮动会影响下面的元素布局，让下面的元素也浮动

2子元素浮动会让父元素保不住。

清除浮动的方法

1给父元素设置高度

2加个空元素设置样式属性clear

3使用属性overflow:hidden

# 21.盒子模型

### 一、盒子简介

**什么是盒子?**

**盒子是用来存储物品 sI-**

**思考一下:一个盒子是由哪些部分进行组成 !v 我们可以将一个盒子理解为一个快递的包裹:v**

**有内容+有填充物+纸盒子 v**

**那我们如何去理解 csS 中的盒子呢?“**

**在 css 中一个盒子的组成部分:内容 (content) +内填充 (padding) +边框(border) +外边距( margin) 一个盒子中的主要属性: width、height、padding、border、marginu**

**width:** **指“宽度”的意思﹐但是这里的宽度指的盒子里面的内容的宽度―而不是盒子的宽刻**

**hegiht:** **指“高度”的意思﹐但是这里的高度指的盒子里面的内容的高度而不是盒子的高度v**

**padding:** **是“内填充”的意思，指的盒子里面的内容到盒子边框的距离**

**border:是“外边框”的意思指的盒子的边框**

**margin:** **是“外边距”的意思指的是盒子与盒子之间的间距。**

---

### 二、范例

**问:请回答如何计算一个盒子的总宽度?,**

**一个盒子的总宽度=盒子里面内容的宽度+左右两边的填充+左右两边的边框线一个盒子的总高度=盒子里面内容的高度+上下两边的填充+上下两边的边框线**

**注意:一个盒子的高度一般情况下是不用设置的，因为一个盒子的高度它应该是由其内容来决定的。**

## 个人觉得重要的地方

1盒子的高度通常时内容决定的

2

**padding:** **是“内填充”的意思，指的盒子里面的内容到盒子边框的距离**

**border:是“外边框”的意思指的盒子的边框**

**margin:** **是“外边距”的意思指的是盒子与盒子之间的间距。**

# 22.Padding

### Padding

**内容介绍**

**一、** **小属性**

**二、简写属性**

---

**Padding 是“内填充”的意思，指的是盒子中间的内容到边框这一段的距离，padding 有4个方向**

**描述四个方向 padding 的2种方法：**

---

### 一、 小属性

**Padding-top**：上内填充

**Padding-right**：右内填充

**Padding-bottom**：下内填充

**Padding-left**：左内填充

---

### 二、简写属性

**Padding**：这个属性是有方向的，同时表示4个方向，这个属性的方向是顺时针方向：上，右，下，左，这个顺序

**Padding**：20px； 表示上右下左四个方向填充都为20像素

**Padding**：10px 20px；表示上下为10像素，左右为20像素

**Padding**：10px 20px 30px；表示上为10像素，左右为20像素，下为30像素

**Padding：10px 20px 30px 40px；表示上为10像素，左为20像素，右为30像素，下为40像素**

## 个人觉得重要的地方

padding的简写属性方向时上右下左

一个时表示所有方位

两个表示上下

三个表示上 左右 下

四个表示 上 右 下 左

# 23.Margin

**内容介绍**

**一、margin** **的定义**

**二、margin** **的描述方法**

---

### 一、margin 的定义

**margin** **它表示“外边距”的意思它是指盒子与盒子之间的距离**

---

### 二、Margin 的描述方法

**margin** **它也是有4个方向的所以我们也能够通过4个方向对其进行描述方法有两种:第一种我们称之为小属性，第二种我们称之为简写属性小属性:,**

 **1.** **小属性**

**margin-top:** **上外边距。margin-right:右外边距,margin-bottom:下外边距。margin-left:左外边距·**

 **2.** **简写属性**

**margin:** **简写属性它是有方向的这里的方向是一个顺时针的方向―它的方向是的顺序是:上、右、下、左。**

**范例：**

**margin:10px;**表示上右下左这四个方向的外边距都是10像素。

**margin:10px 20px;**表示上下这两个方向的外边距为10像素︰左右两个方向的外边距为20像素。

**margin:10px 20px 30px;**表示上外边距为10像素左右外边距为20像素下外边距为30像素,

**margin:10px 20px 30px 40p;**表示上外边距为10像素右外边距为20像素下外边距为30像素左外边距为40像素，

## 个人觉得重要的地方

Margin的简写属性方向时上右下左，和Padding相似

一个时表示所有方位

两个表示上下

三个表示上 左右 下

四个表示 上 右 下 左

# 24.margin塌陷

### margin 塌陷现象

---

**什么是 margin 的塌陷现象**

**1、在标准的文档流中竖直方向的 margin 值不会叠加它会取较大的值.**

**2** **、横着方向是没有 margin 的塌陷现象.**

## 要点

margin在竖直方向取较大值，在水平方向叠加。

# 25.margin居中

### 一、内容简介

**Margin** **的值可以是 auto，当左外边距与右外边距的值都是 auto 时，那么这个盒子就会水平居中**

**Margin** **用法：**

`<span class="lake-fontsize-1515">Margin-left</span>``<span class="lake-fontsize-1515">：auto；/*左外边距*/</span>`

`<span class="lake-fontsize-1515">Margin-right</span>``<span class="lake-fontsize-1515">：auto；/*右外边距*/</span>`

`<span class="lake-fontsize-1515">Margin-top</span>``<span class="lake-fontsize-1515">：100px；/*上外边距100像素*/</span>`

`<span class="lake-fontsize-1515">Margin-bottom</span>``<span class="lake-fontsize-1515">：100px；/*下外边距100像素*/</span>`

---

### 二、属性用法

**Margin-bottom：100px auto；**

---

### 三、注意点

**1. 使用 margin 来实现水平居中时，一定要有固定的宽度（给这个盒子设置一个宽度）只有块元素可以实现水平居中，行内元素不能实现居中**

**/*如果这个元素没有设置固定的宽度，那么这个元素就会占据其父元素的100%宽度*/**

**2.**只有标准文档流中的盒子才可以使用 margin 来实现水平居中

**比如：**`<span class="lake-fontsize-1515">float：left；/*像左浮动*/</span>`（这个用上 margin 就不可能居中）

**3.margin** **属性是用来实现盒子的水平居中，而不是文本的水平居中**

**相反属性：**

**text-align** **这个属性是用于实现文本的水平居中，值为 center 表示文本水平居中，不能实现盒子水平居中**

`<span class="lake-fontsize-1515">text-align</span>``<span class="lake-fontsize-1515">：center；/*只能实现文本水平居中*/</span>`

`<span class="lake-fontsize-1515">margin</span>``<span class="lake-fontsize-1515">：20px auto；/*只能实现元素的水平居中*/</span>`

## 要点

只有标准文档流才能margin水平居中。float的浮动元素不行。

# 26.使用父元素的padding而不是子元素的margin

**margin** **属性本意用于来描述兄弟与兄弟元素之间的关系不是用于描述父子元素之间的关系。**

**描述父子元素的关系最好使用给其父元素设置 padding 属性**

# 27.Border

**内容介绍**

**一、**Border **简介**

**二、范例**

一、Border 简介

**border:** **它是“边框”的意思**

**边框有三个要素:粗细、线型、颜色,**

**语法格式:**

**border:** **粗细线型颜色;**

---

**说明：边框的颜色可以省略不写 但是如果不写的话就表式边框的颜色为黑色 其他的两个属性值不能不写 如果不写的话就不会显示边框**

**其实边框也是有四个方法的:**

**border-top:** **上边框**

**border-right:** **右边框。**

**border-bottom:** **下边框**

**border-left:** **左边框。**

## 要点

border

方向

然后粗细，线形，颜色

# 28 display属性

### 一、 内容简介

**它是“显示”的意思，用来进行行内元素与块级元素之间的相互转换！将隐藏的元素显示或者将显示的元素进行隐藏。**

**Display** **属性取值：inline (行内)、block (块级)、none (无)**

---

### 二、  知识点

**将一个行内元素的 display 属性值设置为 block 后，这个元素就会被转换为块级元素**

`<span class="lake-fontsize-1515">Display: block</span>``<span class="lake-fontsize-1515">；</span>`

`<span class="lake-fontsize-1515">/*</span>``<span class="lake-fontsize-1515">使用 display 属性，行内元素转换为块级元素*/</span>`

`<span class="lake-fontsize-1515">margin-bottom: 20px</span>``<span class="lake-fontsize-1515">；</span>`

`<span class="lake-fontsize-1515">将一个块级元素的 display 属性设置 为 inline，这个元素就会从块级元素转换为行内元素</span>`

`<span class="lake-fontsize-1515">Display: inline</span>``<span class="lake-fontsize-1515">；</span>`

`<span class="lake-fontsize-1515">/*display<span> </span></span>``<span class="lake-fontsize-1515">属性,块级元素转换为行内元素*/</span>`

**将一个显示的元素隐藏,将一个隐藏的元素显示**

**display: none (**将一个显示的元素进行隐藏)

**display: block (**将一个隐藏的元素进行显示)

**这两个功能是 java Script 使用**

**注意点：**

**将行内元素转换成块级元素，这个元素就会拥有块级元素的特点**

**将块级元素转换成行内元素，这个元素就会拥有行内元素的特点**

## 要点

display:block 变成块级元素，display:span 变成行内元素

# 29定位

### 固定定位

一、Position 简介

**position** **在英文中表示“位置”的意思它主要是用于实现对玩元素的定位,在 CSS 中定位分为三种:**

**position:fixed 固定定位**

**position:relative 相对定位,**

**position:absolute 绝对定位**

**注意:**

**在使用定位属性时,一定要配合定位的坐标来使用!。**

**left:** **表示定位的元素离左边多远**

**right:** **表示定位的元素离右边多远。**

**top:** **表示定位的元素离上边多远。**

**bottom: 表示定位的元素离下边多远**

**语法:v**

**position:fixed**

**固定定位，它是相对于浏览器窗口来进行定位。不管页面如何滚动，固定定位元素显示的位置不会改变!v**

**特点:**

**l  **固定定位元素它脱离了标准文档流

**l  **固定定位元素的的层级比标准文档流里面的元素要高所以固定定位元素它会压盖住标准文档流里面的元素

**l  **固定定位元素它不再占用空间。

**l  **固定定位元素它显示的位置不会随着浏览器滚动而滚动

### 相对定位

**相对定位相当于“自己”来定位；**

**语法：position: relative;            **

**特点：**

**1.相对定位元素它没有脱离标准文档流**

**2.相对定位元素没有设置定位坐标，那么相对定位元素还在原来位置**

**3.相对定位元素设置了定位坐标，就会在原位置留下一个空白元素**

**4.相对定位元素会将标准文档流中的元素压盖住**

**5.相对定位元素的定位值可以为负数**

**/*设置定位坐标***/

**Lift: 100px;**

**注意：**

**/*相对定位属性***/Position: relative;

**相对定位元素一般很少单独使用，主要是用来配合“绝对定位”元素来使用**

### 绝对定位

absolute

**什么是绝对定位?**

**绝对定位元素是相对于“祖先定位元素”来进行定位!**

**什么是祖先定位元素?**

**绝对定位元素它会先去查找其父元素是否设置了定位的属性，如果有设置定位的属性那么它就会相对于其父元素来进行定位;但是如果它的父元素没有设置定位属性，那么它就会去查找其父元素的上一级元素是否设置了定位的属性,如果有设置就相对于其父元素的上一级元素进行定位，但是如果没有设置，那么会继续往向一级进行查找，如果其祖先元素都没有设置定位属性，那么它会相对于“浏览器窗口”来进行定位!**

## 要点

固定定位和绝对定位脱离的标准文档流，相对定位没有。

定位时：子绝父相。子元素绝对定位，父元素相对定位是比较常用的。

固定定位：在窗口不动

相对定位：相对原来的自己

绝对定位：相对父元素

# 30z-index  属性

内容介绍

**一、z-index**

**Ø  **z-index 表示谁压盖着谁，数值大的会压盖住数值小的

**Ø  **只有定位的元素才有 **z-index** **值 只有设置了固定定位、相对定位、绝对定位了的元素它们才会拥有** **z-index**

**Ø  **z-index 的值是没有单位的**,**值是一个正整数**,**默认的 **z-index** **的值是**0

**Ø  **如果定位元素没有设置 **z-index** **属性或者** **z-index** **值设置一样**,**那么写在 HTML 后面的定位前面的定位元素**

**.**divi **与**都设置了绝对定位**,**所以它们就拥有了 **z-index** **属性**,**但是并没有给其设置** **z-index** **属性。没有设置** **z-index** **属性那么它们的值就为**0

**我们要观察** **HTML** **中的结构** **.div1** **这个元素它写在** **.div2** **的后面然后就能知道** **.div1** **这个元素就会压盖住 .div2**

# 31结构伪类

---

**内容介绍**

**一、css3 与  css2 之间的区别**

**二、结构伪类**

**三、使用 css3 中的结构伪类选择器来实现隔行变色的表格**

---

### 一、css3与css2之间的区别

**css3=css2** **新退法+新的属性**

**是对 css2 进行扩充 删减 优化**

---

### 二、结构伪类

**选择器                    功能**

**1.E:first-child        ** **匹配第一个孩子**

**2.E;last-child          **匹配最后一个孩子

**3.E:nth-child(n)        **匹配第n个孩子

**4.E:nth-child(2n)或     匹配偶数的孩子**

**E:nth-child(even)**

**5.** **E:nth-child(2n+1)    ** **匹配奇数的孩子**

**E;nth-child(odd)**

**6.E:only-childo        ** **匹配有且只有一个孩子**

 **1** **.E:first-child  ****匹配第一个孩子**

`<span class="lake-fontsize-1515"><title></span>``<span class="lake-fontsize-1515">结构伪类</title></span>`

`<span class="lake-fontsize-1515"><style type="text/css"></span>`

`<span class="lake-fontsize-1515">/*</span>``<span class="lake-fontsize-1515">使用 CSS3中的结构伪类选择器来匹配元素*/</span>`

`<span class="lake-fontsize-1515">/*</span>``<span class="lake-fontsize-1515">匹配第一个孩子 格式:E:first-child{属性:值;};*/</span>`

`<span class="lake-fontsize-1515">.box ul li:first-child{color:#f00;width:100px;</span>`

`<span class="lake-fontsize-1515">height:30px;Line-height:30px;border:1px solid #000;}</span>`

`<span class="lake-fontsize-1515"></style></span>`

`<span class="lake-fontsize-1515"></head></span>`

`<span class="lake-fontsize-1515"><body></span>`

`<span class="lake-fontsize-1515"><div class-"box"></span>`

`<span class="lake-fontsize-1515"><ul></span>`

`<span class="lake-fontsize-1515"><li></span>``<span class="lake-fontsize-1515">黑马程序员1<li></span>`

 **2** **.E;last-child  ****匹配最后一个孩子**

`<span class="lake-fontsize-1515">/*</span>``<span class="lake-fontsize-1515">匹配最后一个孩子：E;last-child{属性：值；}；*/</span>`

`<span class="lake-fontsize-1515">.box ul li:last-child{color:#f00;width:100px;height:30px;</span>`

`<span class="lake-fontsize-1515">Line-height:30px;border:1px solid #000;}</span>`

 **3** **.E:nth-child(n)  ****匹配第 n 个孩子**

`<span class="lake-fontsize-1515">/*</span>``<span class="lake-fontsize-1515">匹配第n个孩子：E:nth-child(n){属性：值；}；*/</span>`

`<span class="lake-fontsize-1515">.box ul li:nth-child(</span>``<span class="lake-fontsize-1515">随意输入一个数){color:pink;width:100px;</span>`

`<span class="lake-fontsize-1515">height:30px;Line-height:40px;border:1px solid skyblue;}</span>`

 **4**  **.E:nth-child(2n)** **或E:nth-child(even)  匹配偶数的孩子**

`<span class="lake-fontsize-1515">/*</span>``<span class="lake-fontsize-1515">匹配偶数的孩子：E:nth-child(n){属性：值；}或者：nth-child(even){属性：值；}*/</span>`

`<span class="lake-fontsize-1515">.box ul li:nth-child(2){color:00f;background:pink;</span>`

`<span class="lake-fontsize-1515">Width:100px;}*/</span>`

`<span class="lake-fontsize-1515">.box ul li:nth-child(even){color:f00;background:pink;</span>`

`<span class="lake-fontsize-1515">Width:100px;}*/</span>`

 **5**  **.E:nth-child(2+1n)** **或E:nth-child(odd)  匹配偶数的孩子**

`<span class="lake-fontsize-1515">/*</span>``<span class="lake-fontsize-1515">匹配奇数的孩子：E:nth-child(2n+1){属性：值；}或者：nth-child(odd){属性：值；}*/</span>`

`<span class="lake-fontsize-1515">.box ul li:nth-child(2n+){color:0f0;Width:100px;</span>`

`<span class="lake-fontsize-1515">Background-color</span>``<span class="lake-fontsize-1515">：skyblue；}*/</span>`

`<span class="lake-fontsize-1515">.box ul li:nth-child(odd){color:gold;Width:100px;</span>`

`<span class="lake-fontsize-1515">Background-color</span>``<span class="lake-fontsize-1515">：skyblue；}*/</span>`

`<span class="lake-fontsize-1515">6</span>``<span class="lake-fontsize-1515">.E:only-child  </span>``<span class="lake-fontsize-1515">匹配有且只有一个孩子</span>`

`<span class="lake-fontsize-1515">/*</span>``<span class="lake-fontsize-1515">匹配有且只有一个孩子:E:only-child{属性：值；}*/</span>`

`<span class="lake-fontsize-1515">Dix u1 li:only-child{color:#f00;}</span>`

# 32Border-collapse

内容介绍

**一、border-collapse 简介**

**这个属性主要是用于来合并边框线 其值为：collapse**

**border-collapse : collapse;**

内容介绍

# 33伪元素

**选择器                功能**

**:first-letter        ** **操作当前元素中第一个字**

**:first-line          ** **操作当前元素中第一行**

**:beforerw            ** **在之前插入，在一一个盒子内部的最前面**

**:afterp              ** **在之后插入，在一个盒子内部的最后面**

`<span class="lake-fontsize-1515">/*.box:first-letter</span>`

`<span class="lake-fontsize-1515">如：操作当前元素中的第一个字<span> </span></span>`

`<span class="lake-fontsize-1515">color:#f00;<br/>font-size:40px;padding:20px;}*/</span>`

`<span class="lake-fontsize-1515">.box:first-line{color:#9F79EE;}</span>`

`<span class="lake-fontsize-1515">.box::before{/*</span>``<span class="lake-fontsize-1515">如：要在当前元素的最前面插入文字必须将文字放上在content中*/Content：如“黑马程序员”;</span>`

`<span class="lake-fontsize-1515">.box::after/*</span>``<span class="lake-fontsize-1515">要在当前元素的最后面插入文字*/ content: 如"hello";}</span>`

# 34阴影

内容介绍

**一、**text-shadow

---

### 一、文本阴影text-shadow

**text-shadow:**水平阴影 垂直阴影 模糊距离 阴影颜色。

**注释: text-shadow 属性向文本添加一个或多个阴影。该属性是逗号分隔的阴影列表，每个阴影有两个或三个长度值和一个可选的颜色值进行规定。省略的长度是0。**

**描述:**

**●**文字阴影可以有多组值，多组之间用逗号隔开就可以。

**●**水平阴影正值阴影在右边，负值在左边。

**●**垂直阴影正值在下边，负值在上边。

**●模糊强度，值越大越模糊。**

---

### 二、盒子阴影

Box-shadow

**水平方向阴影、垂直方向阴影、模糊距离、阴影尺寸、阴影颜色、内/外阴影。**

`<span class="lake-fontsize-1515"><title></span>``<span class="lake-fontsize-1515">盒子阴影</title><br/><style type="text/css")<br/>.boxf<br/>width:100px;height:100px;</span>`

`<span class="lake-fontsize-1515">border:1px solid#000;/*</span>``<span class="lake-fontsize-1515">给这个盒子设置阴影</span>`语法格式:
box-shadow:  水平方向的阴影 垂直方向的阴影 阴影的清晰度 阴影的大小 阴影的颜色 阴影的位置

`<span class="lake-fontsize-1515">inset outset (</span>``<span class="lake-fontsize-1515" data-spm-anchor-id="a2c6h.21258798.0.i20.21755a72d4MFML">默认值);*/box-shadow:3px 3px 3px 3px #f00;}</span>`

`<span class="lake-fontsize-1515"></style></head></boby></div class=”box”></div></span>`

**1.**盒子阴影可以有多组值，多组之间用逗号隔开。

**2.**水平阴影正值阴影在右边，负值在左边。

**3.**垂直阴影正值在下边，负值在上边。

**4.**模糊尺寸，值越大越模糊。

`<span class="lake-fontsize-1515">Box-shadow:(</span>``<span class="lake-fontsize-1515">两组阴影)3px 3px 3px 3px #f00,-4px -4px 2px 2px #DA70D6（颜色）0 inset;}</span>`

---

### 三、图片阴影

`<span class="lake-fontsize-1515"><title></span>` `<span class="lake-fontsize-1515">给图片设置阴影 </title><br/><style type="text/css"><br/>img{box-shadow: 2px 2px 2px 2px #FFA07A(颜色）；}<br/></style></head><body><br/><img src="./images/1.jpg（图片）"></body></html></span>
`

# 35圆角矩形

### 圆角矩形


---

### 一、Border-radius

`<span class="lake-fontsize-1515">Border-radius</span>``<span class="lake-fontsize-1515">：左上 右上 右下 左下</span>`

`<span class="lake-fontsize-1515">< !DOCTYPE html></span>`

`<span class="lake-fontsize-1515"><html lang="en"></span>`

`<span class="lake-fontsize-1515"><head></span>`

`<span class="lake-fontsize-1515"><meta charset="UTF-8"></span>`

`<span class="lake-fontsize-1515"><title></span>``<span class="lake-fontsize-1515">圆角矩形</title></span>`

`<span class="lake-fontsize-1515"><style type="text/css"></span>`

`<span class="lake-fontsize-1515">div{</span>`

`<span class="lake-fontsize-1515">width: 100px;</span>`

`<span class="lake-fontsize-1515">height:100px ;</span>`

`<span class="lake-fontsize-1515">border:1px solid #f00 ;</span>`

`<span class="lake-fontsize-1515">}</span>`

`<span class="lake-fontsize-1515">/*</span>``<span class="lake-fontsize-1515">使用结构伪类选择器来匹配元素*/</span>`

`<span class="lake-fontsize-1515">div :nth-child(1){</span>`

`<span class="lake-fontsize-1515">/*border-radius:</span>``<span class="lake-fontsize-1515">左上 右上 右下 左下; */</span>`

`<span class="lake-fontsize-1515">border-radius: 10px 20px 30px 40px;</span>`

`<span class="lake-fontsize-1515">}</span>`

`<span class="lake-fontsize-1515"></style></span>`

`<span class="lake-fontsize-1515"></head></span>`

`<span class="lake-fontsize-1515">< body></span>`

`<span class="lake-fontsize-1515"><div></div></span>`

**如果说 border-radius 的四个值都是一样的话就可以只需要写一个参数就可以.**

# 36透明度

内容介绍

**一、透明度**

---

### 一、透明度

**CSS** **透明度**

**只要是颜色，都可以用透明度**

**Rgba**（红色，绿色，蓝色，透明度）

**a**：表示透明度的意思  透明度取值：0~1之间  0表示完全透明  1表示不透明

**·背景颜色透明**

`<span class="lake-fontsize-1515">Background-color:rgba(255,255,255,0.3)</span>`

**·文件颜色透明**

`<span class="lake-fontsize-1515">Coler:rgba(255,255,255,0.3)</span>`

**·边框颜色透明**

`<span class="lake-fontsize-1515">Border:1px soild rgba(255,255,255,0.5)</span>`

`<span class="lake-fontsize-1515"><!DOCTYPE html></span>`

`<span class="lake-fontsize-1515"><html lang=”en”></span>`

`<span class="lake-fontsize-1515"><head></span>`

`<span class="lake-fontsize-1515"><meta charset=”UTF-8”></span>`

`<span class="lake-fontsize-1515"><title></span>``<span class="lake-fontsize-1515">背景颜色透明度</title></span>`

`<span class="lake-fontsize-1515"><style type=”text/css”>ground</span>`

`<span class="lake-fontsize-1515">{</span>`

`<span class="lake-fontsize-1515">Margin:0;</span>`

`<span class="lake-fontsize-1515">Padding:0;</span>`

`<span class="lake-fontsize-1515">}</span>`

`<span class="lake-fontsize-1515">.boxx{</span>`

`<span class="lake-fontsize-1515">Width:100px;</span>`

`<span class="lake-fontsize-1515">Height:100px;</span>`

`<span class="lake-fontsize-1515">Background:rgb(255,0,0,0.5);</span>`

`<span class="lake-fontsize-1515">Position:fixed;</span>`

`<span class="lake-fontsize-1515">}</span>`

`<span class="lake-fontsize-1515"></style></span>`

`<span class="lake-fontsize-1515"></head></span>`

`<span class="lake-fontsize-1515"><body></span>`

`<span class="lake-fontsize-1515"><div class=”bos”></div></span>`

`<span class="lake-fontsize-1515"></body></span>`

`<span class="lake-fontsize-1515"></html></span>`

**例2**

`<span class="lake-fontsize-1515"><!DOCTYPE html></span>`

`<span class="lake-fontsize-1515"><html lang="en"></span>`

`<span class="lake-fontsize-1515"><head></span>`

`<span class="lake-fontsize-1515"><meta charset="UTF-8"></span>`

`<span class="lake-fontsize-1515"><title></span>``<span class="lake-fontsize-1515">文本颜色设置透明度</title></span>`

`<span class="lake-fontsize-1515"><style type="text/css"></span>`

`<span class="lake-fontsize-1515">.box{</span>`

`<span class="lake-fontsize-1515">width:100px;</span>`

`<span class="lake-fontsize-1515">height:100px;</span>`

`<span class="lake-fontsize-1515">color:rgba(255,0,0,0.3);</span>`

`<span class="lake-fontsize-1515">border:10px solid rgba(0,0,0,0.4);</span>`

`<span class="lake-fontsize-1515">}</span>`

`<span class="lake-fontsize-1515"></style></span>`

`<span class="lake-fontsize-1515"></head></span>`

`<span class="lake-fontsize-1515"><body></span>`

`<span class="lake-fontsize-1515"><div class="box"></span>``<span class="lake-fontsize-1515">文本颜色设置透明度</div></span>`
