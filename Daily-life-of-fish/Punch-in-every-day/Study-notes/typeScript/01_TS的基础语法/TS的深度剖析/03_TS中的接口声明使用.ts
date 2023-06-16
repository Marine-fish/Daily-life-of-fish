/**
 * interface 接口
 * 类似于const, class
 * 声明的方式
 * 1. interface和type的区别
 * type类型使用类型更广但是interface只能声明对象
 * 2. 在声明对象时, interface可以多次声明(但是在使用时里面的条件要同时满足才行)
 * type类型不允许相同的别名同时存在
 * 3. interface支持继承
 * 4. interface可以被类实现
 */

//1.
type num = number
interface age {}

//2.
interface info {
    name: string,
    age: number
}
interface info {
    name: string,
    age: number
}

// type info2 = {
//     foo: string,
//     bar: number
// }
// type info2 = {
//     foo: string,
//     bar: number
// }

//3.这样可以避免很多key重复
interface Plant {
    name: string,
    age: number
}

interface Tree extends Plant {

}

//4.
// class Person implements Tree {

// }
