/**
 * 按照第一种写法内函数定义了类型
 * 那么类型就固定,就只能传对应的类型
 */
//1.
function foo(name: string, age: number) {

}
foo("per", 23)

//定义一个函数,将传入的参数return出去, 问题还是和上面一样
//解决办法让外界传入的类型来决定函数参数的类型
//就可以用泛型 <Type>里的是来记录外界传入的类型,最后将<Type>
//当成变量给参数当类型判别使用
// function bar(arg: string | number | {age: number}) {
//     return arg
// }
// bar(121)
// bar("121")
// bar({age: 123})
function bar<Type, El>(arg: Type, name: El): Type {
    return arg
}
bar<number, string>(121, "21212")
bar<string, number>("121", 5454)
bar<{age: number}, {name: string}>({age: 123}, {name: "123"})

//大多数会类型推导可以简写
const type1 = bar(1313, "per")

export {}