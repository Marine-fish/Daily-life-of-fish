/**
 * ?: 表示在调用函数给传参时可以省略
 * 在传入明确的规定类型值时参数类型就是规定的类型
 * 如果没有传那么类型就是undefined
 * ?: 类型 number | undefined
 */

function foo(name: string, age?: number) {

}

foo("x")