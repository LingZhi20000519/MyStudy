# Getting Started

    这个Udemy上的JavaScript教程很棒。
    可以在浏览器的Console上面写JavaScript代码
    推荐的开发工具是VS Code和Node.js
    Separation of Concerns把JavaScript代码与html分离。在Script标签的src attribute中添加js代码
    在terminal中使用node index.js命令运行js代码

# Basics

## Variables 变量

使用let定义，最好不要用var定义。声明变量的时候不用声明类型，回自动转换。

## Constants 常量

使用const定义，定义完了之后不变

## Primitive Types 基本类型

五种
    string 
    number
    boolean
    undefined
    null

## Dynamic Typing动态类型

let定义的变量，类型会随输入的值一样动态改变。

## Objects 对象
使用花括号定义，例如

```javascript
person={
 name:"lz",
 age:22
}
//Dot Notation
person.name="Bennett";
//Bracket Notation
person['name']="Bennett";
```

感觉一个JSON就像是一个类。

## Array数组

```javascript
let selectedColors=['red','blue'];
selectedColors[0]=true;
selectedColors[2]="white";
console.log(selectedColors);
```

使用方括号定义，数组里面元素的类型可以不同
## Fuctions函数

使用fuctions定义，有返回值。

```javascript
fuction square(num){
    return num*num;
}
console.log(square(2));
```

# Operators
## JavaScript Operators
## Arithmetic Operators
## Assignment Operators
## Comparison Operators
## Equality Operators
## Ternary Operators
## Logical Operators With Non-booleans
## BitWise Operators
"|"位或
"&"位与

```javascript
// 1 = 00000001
/*
    read,write,execute
    00000100
    00000010
    00000001
*/
```

## Operator Precedence
(2+3)*4

# Control Flow
## IF else
## Switch case
## for
## While
## do while
## infinite loops

## for in
in表示遍历key
## for of
of表示遍历value
## break and continue

## max of two numbers
## landscape or portrait
## fizzbuzz
## demerit point
## even and odd numbers
## truthy
## properties
## sum of mutiples 3 and 5
## grade
## stars
## prime numbers

# Objects
## Basics
function in Objects called Method
## Factory Functions
写一个Function，return Object
## Dynamic Nature of Objects
对象创建后可以随意加属性，
## Constructor Property
new String()//'',"",``\
new Boolean()// true,false
new Number()// 1,2,3

constructor方法可以得到创造这个对象的函数
## Functions are Objects
Functions也是对象，有构造函数

function函数可以用定义对象的方式创建。

## Values vs Reference Types
value:number,string,boolean,symbol,undefined,null
reference:object.function,array

值传递
引用传递

## Enumerating Properties of an Object
枚举一个对象
Object.key()
或者entry
## Cloning an Object
const another={...circle};

## Garbage Collection
不用管数据回收。
## Math
数学函数。
比较常用的有
Math.random()。
还有max，round等。


## String
有PRIMITIVE的string
也有Object类型的string

string的object类型有很多方法

常用的有
length
includes
startsWith
indexOf
replace

使用反斜杠进行转义。
\n
\'

## Template Literals
//Object{}
Boolean true false
String '' ""
Template ``

可以使用美元符号进行替代。
## Date

Data 类，自带的。
有get和set函数

# Array
## Adding Elements
array用const不能限制，依然可以改变其中内容
array是一个类

使用push在结尾加

使用unshift在开头加

使用splice在中间加
splice(2,0,1)


## finding elements(primitives)
使用index方法

lastIndexOf

include方法判断是否包含元素

## finding elements reference

引用类型不能用include方法查，因为放到include中的与array中都不是同一个对象
使用find方法
在find方法中，输入参数是一个函数。
还有findIndex
## arrow functions
箭头函数

function course{
    return courese.name==='a'
}

在参数里，输入函数可以用箭头函数
course=>{ 巴拉巴拉}

## removing elements
在结尾删除
pop方法

在开头删除
shift

中间
splice
splice(2,1)

## emptying an array
清空

//方法一 如果有别的引用，会保留
numbers=[]

//方法二 如果有别的引用，会一起重置
number.length=0

//方法三 不推荐
numbers.splice(0.numbers.length)

//方法四 不推荐用
while(numbers.length>0)
    numbers.pop();

## combing and slicing arrays
concat方法链接两个array
slice分离一段

## the spread operator
使用...
combined=[...first,...second];
可以相当于把数组的内容拿出来，丢到新数组中，不是引用
## lterating an array
使用foreach函数和箭头函数
## joining arrays
join函数
获得一个字符串，使用join中的参数分开
        ？如果是引用类型呢
split函数
把一个sprint，分成array
## sorting arrays
排序
sort方法 正向排序
reverse方法 反向排序

如果有引用类型，加入函数
## testing the elements of an array
使用every加箭头函数，测试所有
使用some加箭头函数，有一个就行
## filtering an array
使用过滤器
filter加箭头函数，获得过滤后的数组。
## mapping an array
map加箭头函数，给数组的每个元素重新定向。

返回新的数组

可以反复调用Filter和map
## reducing an array
reduce method
numbers.reduce((accumulator,currentValue)=>{return accumulator+currentValue},0);
如过不加第二次参数，会把数组中的第一个当作accumulator

# Functions
## function delaration expressions
函数声明和函数描述  
可以用匿名函数的形式创建一个函数，函数也是一个对象
```javascript
//函数声明 Function Declaration
function walk(){
    console.log('walk')
}

//Anonymous Function Express
const run=function(){
    console.log('run');
};
let move=run;
run();
move();
```
## Hoist
升起  
使用Declaration的函数，在声明之前使用。使用Function Express的不行。
```javascript

walk();//可以使用，因为Hoist了
function walk(){
    console.log('walk')
}

run();//会报错
const run=function(){
    console.log('run');
};
```
# Arguments
论据？  
arguments是函数中的一个类，获得所有的输入参数。  
在声明函数的时候可以使用"..."来表示把其余的所有的参数放到一个数组里。
```javascript
function sum(){
    let total=0;
    //arguments是一个对象，key是从0开始的自然数集合,value是输入的参数有点像数组但是是个对象。
    for(let value of arguments)
        total+=value;
    return total;
}

//调用函数的所有输入都会放到函数的arguments对象中。
console.log(sum(1,2,3,4,5,10))

//此外，还有...args
function sumArgs(...args){
    return args.reduce((a,b)=>a+b);
}

//The Rest Operator
function sumArgs(discount,...args){
    return (1-discount)*args.reduce((a,b)=>a+b);
}

```
# default Parameters
函数的默认参数，声明变量后直接加=。
```javascript
function interest(principal,rate=3.5,years=5){
    return principal*rate/100*years;
}

console.log(interest(10000));
```
# getters and Setters
get和set函数是类中特殊的，用于设置和获取某一参数的方法
```javaScript
const person={
    firstName:'ling',
    lastName:'zhi',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts=value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
};
person.fullName='a aa'
console.log(person.fullName);
```
## Try and Catch
异常的引入和抛出。
```javascript
const person={
    firstName:'ling',
    lastName:'zhi',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        if(typeof value!=='string')
            throw new Error('Value is not a string.');

        const parts = value.split(' ');
        if (parts.length!==2)
            throw new Error('Enter a first and last name');

        this.firstName=parts[0];
        this.lastName=parts[1];
    }
};

try{
    person.fullName='';
}
catch(e){
    alert(e);
}
```
# local and Global Scope
一对花括号为代码一个代码块，里面定义的值，只有代码块中能用。  
花括号外面的是全局变量，所有都能用。  
要尽量避免使用全局变量。  
局部变量可以覆盖全局变量
```javascript
const color='red';
function start(){
    const message='hi';
    const color='red';
    //局部变量覆盖全局变量
    console.log(color);
}

start();
//无法调用局部变量
console.log(message);
```
# let 和 var
var是ES6（ES2015）之前定义变量的唯一方法。  
现在推荐使用let定义变量，const定义常量。  
var是定义function-scoped的变量。  
let和const定义block-scoped的变量。  
```javascript
function start(){
    for(var i=0;i<5;i++)
        console.log("a");

    //可以输出i
    console.log(i);
}
start();
```
var定义的变量会到window中，let不会。  
```javascript
var color='red';
let age=30;

console.log(window.color);
console.log(window.age);
```
# The this Key
对象的方法中的this指向的是这个对象。  
常规的方法在浏览器中指向的是window对象，node中指向的是global对象  
在对象的方法中调用了回调函数的this关键字，也是常规方法的指向。 
```javascript
const video={
    title:'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
                //这个this指向的是window
                console.log(this.title,tag);
            }
        )
    }
}

video.showTags();
``` 
# Changing This
使用bind方法绑定
```javascript
const video={
    title:'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
                //这个this指向的是window
                console.log(this.title,tag);
            }.bind(this));
    }
};

video.showTags();
``` 
箭头函数也可以
```javascript
const video={
    title:'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(tag=>{
            console.log(this.title,tag)
        });
    }
};

video.showTags();
``` 

# 小结
udemy上Mosh的JavaScript课程学完了，JavaScript不单单是浏览器的脚本，也是一个完全的编程语言。补足了之前不扎实的基础。
