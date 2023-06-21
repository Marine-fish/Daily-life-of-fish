/**
 * 定义一个函数,想要拿到函数的返回值类型
 * 利用TS内置工具ReturnType
 * 
 */

type FooReturn = (num1: string, num2: number) => string
function bar() {
    return 132
}

/**
 * 类型体操
 * 封装一个自己的ReturnType
 * 利用条件类型结合infer
 */
//获取返回值类型
type MyReturnType<T extends (...arg: any[]) => any> = T extends (...arg: any[]) => infer R?R:false
//获取参数的类型
type MyArgType<T extends (...arg: any[]) => any> = T extends (...arg: infer A) => any ?A:false
// type FooReturnType = ReturnType<FooReturn>
// type BarReturnType = ReturnType<typeof bar>
type FooReturnType = MyReturnType<FooReturn>
type BarReturnType = MyReturnType<typeof bar>