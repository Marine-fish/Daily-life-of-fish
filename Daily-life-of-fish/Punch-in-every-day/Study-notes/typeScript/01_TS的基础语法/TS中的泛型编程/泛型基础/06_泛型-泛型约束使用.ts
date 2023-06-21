/**
 * 比如定义一个获取length的函数
 * 由于不清楚参入参数的类型
 * 可以
 */
// type lengthType = {length: number}
// interface lengthType {
//     length: number
// }
// function getLength(arg: lengthType) {

// }
// getLength(["1","1","1",])
// getLength([1,"1",1,])
// getLength({length: 30})

//利用泛型,但是这样写就没有了约束
// interface lengthType {
//     length: number
// }
// function getLength<T>(arg: T) {

// }
// getLength(["1","1","1",])
// getLength([1,"1",1,])
// getLength({length: 30})

//采用泛型约束 利用extends继承
interface lengthType {
    length: number
}
function getLength<T extends lengthType>(arg: T): T {
    return arg
}
getLength(["1","1","1",])
getLength([1,"1",1,])
getLength({length: 30})