const age = 18
function foo() {
    console.log("你好")
}

//导出方式一:
// exports.age = age
// exports.foo = foo

/**
 * 导出方式二:
 * 每个模块都有一个对象module
 * 对象module里有个属性exports
 */
module.exports.age = age
module.exports.foo = foo

/**
 * 常见的写法
 */
module.exports = {}