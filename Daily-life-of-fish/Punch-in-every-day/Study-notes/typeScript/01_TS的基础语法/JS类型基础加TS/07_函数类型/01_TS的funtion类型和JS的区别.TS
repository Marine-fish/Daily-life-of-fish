/**
 * 函数中参数的类型
 * 在函数里的参数不能类型推导
 * 返回值会类型推导
 * 也可以明确指定类型
 */

function foo(num: string, arg:number):string {
    return num + arg
}
const sum = foo("1", 2)