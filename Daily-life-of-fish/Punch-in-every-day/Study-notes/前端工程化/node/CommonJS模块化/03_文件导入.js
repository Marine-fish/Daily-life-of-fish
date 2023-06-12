//单个对象导入
// const age = require("./02_文件导出")
// console.log(age)

//对对象进行解构
const { age, foo } = require("./02_文件导出")
console.log(age, foo())

/**
 * require()函数的类型
 * 1.导入自己的模块
 * require(路径)
 * 1.1 导入自己的模块的查找文件顺序
 * 1.1.1 先查找有没有./或../或/文件
 * 1.1.2 查找.js的文件
 * 1.1.3 查找json文件
 * 1.1.4 查找node文件
 * 以上是没有加后缀名的查找顺序require(./模块化)
 * 如果还是没有没有找到对应的文件以未加后缀名为目录 拼接找index文件
 * 1.1.5 /index.js
 * 1.1.6 /index.json
 * 1.1.7 /index.node
 * 如果还是没有找到时候会报错 not found
 * 如果require(只是一个名称还不是内置模块名称)
 * 1.1.8 找不到内置模块就会去找node_modules文件里的文件拼接的
 * 顺序和上面一样 前提是在自己的上层目录去寻找,找不到
 * 2.导入node内置模块
 * require(内置模块的名称)
 */