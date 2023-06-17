/**
 * 函数表达式的缺点:
 * 就是只能定义函数参数的的类型和返回值类型
 * 如果给函数内部添加属性用函数表达式就无法实现
 * 这个时候就要用到调用签名
 */

type barType = (age: number, name: string) => string
interface barArg {
    name: string,
    age: number,
    //调用签名
    (num: number): number
}

type numType = number
const bar: barArg = (num: numType) => {
    return 2333
}
bar.age = 12
bar.name = 'per'
bar(1212)
