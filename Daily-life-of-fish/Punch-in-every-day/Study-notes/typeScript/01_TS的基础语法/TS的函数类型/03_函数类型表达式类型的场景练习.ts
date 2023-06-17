/**
 * 定义一个函数, 传入的参数内部进行相加
 */

type sumType = (num1: number, num2: number) => number
const sum: sumType = (num1: number, num2: number): number => num1 + num2
const sumData = sum(2, 5)
console.log(sumData)

type calcType = (fn: sumType) => number
const calc = (fn: sumType) => {
    return fn(1, 2)
}

type numType = number
const add = (num1: numType, num2: numType) => {
   
    return num1 + num2
}

const sub = (num1: number) => {
    return num1 
}

console.log(calc(add), calc(sub)) 

