/**
 * 1. 函数类型表达式
 */
           
//1.          参数列表         返回值
// const bar: (num1: number) => number = (arg: number): number => 123
//对上面的类型表达进行优化(起个别名)
type barType = (num1: number) => number
const bar: barType = (arg: number): number => 123
const bars =  bar(124)
console.log(bars)