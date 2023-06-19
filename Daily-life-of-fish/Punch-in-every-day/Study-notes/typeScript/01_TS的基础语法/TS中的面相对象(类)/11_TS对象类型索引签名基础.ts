/***
 * 这种情况下,很明确的知道属性有那些
 * 知道每个属性对应的操作
 */
// interface Person {
//     name: string
//     age: number
// }

// const p: Person = {
//     name: 'per',
//     age: 23
// }
// console.log(p.age)

/**
 * 
 * 这种情况下就不清楚一个函数的返回值是什么类型
 * 这个时候就可以用索引签名
 * 因为函数也是对象,拥有可以通过索引去获取值
 * 用索引签名就能很明确指定这个函数返回值
 * 通过索引类型number,返回值是一个字符串
 */

interface Person {
    [key: number]: string
}
function foo(): Person {
    const about: any = "xxx"
    return about
}
const p = foo()
// console.log(p."????")
console.log(p)