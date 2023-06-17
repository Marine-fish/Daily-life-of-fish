/**
 * 在TS中普通函数是不能用 new 关键字
 * 在给一个函数定义只有传入类函数才能
 * 调用这个函数,就要用构造签名
 */

// const foo = function() {

// }

// const foo1 = new foo()
// console.log(foo1.name = 'per')

class plant {

}

interface fooNew {
    new (): plant
}
const foo = (fn: fooNew) => {
    const o = new fn()
    return o
}


foo(plant)