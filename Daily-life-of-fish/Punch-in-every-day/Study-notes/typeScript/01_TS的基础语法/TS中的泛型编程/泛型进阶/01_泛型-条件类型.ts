/**
 * 条件类型和JS的三元运算符一样
 */

//判断string是否是IDType
type IdType = string | number
// const res = IdType === string ? true:false
type resType = string extends IdType ? true:false

//实现场景-函数重载
// function sum(num: string, num1: string): string
// function sum(num: number, num1: number): number
// function sum(num, num1) {
//     return num + num1
// }

//利用条件类型对函数重载进行优化
function sum<T extends number | string> (num: T, num1: T): T extends number?number:string 
function sum(num, num1) {
    return num + num1
}
const resType = sum(2, 4)