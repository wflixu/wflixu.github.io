---
title: 前端学swift入门
postSlug: swift-starter
featured: false
draft: false
tags:
  - swift
  - 开发
  - ios
  - macos
description: swift 开始
pubDatetime: 2023-01-08T16:14:23.735Z
updateTime: 2024-02-01T05:22:55.887Z
---

# 背景

下班时间，总想写点自己喜欢的东西，rust 入门了 2 次，还是没有用起来，原因有两个，一是 rust 偏底层，前端工作场景上用到的好像也不太多；二是 rust 语言本身比较复杂，所有权机制导致代码很绕，实现简单的动能都很难。本来在玩 flutter，但是 dart 满满的 java 味，不说很喜欢。最终决定入坑 swift，因为它比较新，2014年发布，语法吸收了现代编程语言的特点相对好理解，支持多种编程范式，swiftUI 编程模型和前端 vue、react 的编程模式很像，可以学以致用，写一些小程序来玩。

# swift 简单入门

## 变量

var 声明变量
let 声明常量

print() 方法打印

注释 // /\*\*/

语句中不要求分号；

swift 是类型安全的，和 Typescript 一样使用后置类型标注，类型基本上都是大写字母开头。

typealias 可以对内置的类型设置别名

## 基础的数据类型：

number 类型和 js 的区别是分的更细，分整型和浮点型，

- nubmer
  - Int
  - UInt
  - Double
  - Float

Tuples 类型，是固定长度的数组，可以通过下标访问

Optional 可选类型
一个变量可能有值，也可能没有值，没有值的情况用 nil 表示，和 js 中的 null 类似。
只有变量是可选类型才能赋值为 nil；

强制展开用！

```swift
 var num:Int? = 40;
num = nil;

```

?? 操作符

区间运算符

```

for index in 1...5 {
    print("\(index) times 5 is \(index * 5)")
}

let names = ["Anna", "Alex", "Brian", "Jack"]
let count = names.count
for i in 0..<count {
    print("Person \(i + 1) is called \(names[i])")
}

for name in names[2...] {
    print(name)
}
```

## 控制语句

if 不用括号，后面可有是赋值语句。

switch case 中没有 break 本身的语意就是执行当前 case 中的代码块，fallthrough 关键字连续执行多个代码块

while

repeat while 相当于 do while

## 字符串

在实际项目中，一大部分逻辑都在处理字符串，但是 swift 的字符串并不好用。

多行字符串

```
let quotation = """
The White Rabbit put on his spectacles.  "Where shall I begin,
please your Majesty?" he asked.

"Begin at the beginning," the King said gravely, "and go on
till you come to the end; then stop."
"""

```

特殊的字符串字面量

\0 (null character)， \\ (backslash)， \t (horizontal tab)， \n (line feed)， \r (carriage return)， \“(double quotation mark) and \‘(single quotation mark)

\u\{n\} unicode
现实#“”#

## Array

# 未完待续！！
