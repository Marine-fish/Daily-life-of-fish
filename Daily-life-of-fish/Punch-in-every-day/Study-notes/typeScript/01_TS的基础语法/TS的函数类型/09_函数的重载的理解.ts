/**
 * 函数的重载就是
 * 调调用函数传入的参数类型不确定,
 * 但是函数内部方法一样
 * 这个时候就可以使用函数的重载
 * 第一步定义函数重载(一般会定义2个或多个函数重载)
 * 第二步定义一个通用函数去实现重载函数
 */

//1.
function add(num1: number, num2: string): string
function add(num1: number, num2: number): number

//2.
function add(num1: any, num2: any): any {
    return num1 +num2
}
console.log(add(1, 2), add(5, "ha"))