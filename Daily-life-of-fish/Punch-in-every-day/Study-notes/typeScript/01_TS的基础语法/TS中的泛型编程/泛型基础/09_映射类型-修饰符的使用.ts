//这样的话拷贝出来的属性都是必传的
interface Person {
    name: string
    age: number
    hight: number
}

//这样的话拷贝出来的属性都是必传的
// type MapPerson<T> = {
//     [getPerson in keyof T]: T[getPerson]
// }

//利用修饰符 ?: 可选 等于每次遍历出来的key都加上?:
// type MapPerson<T> = {
//     [getPerson in keyof T]?: T[getPerson]
// }

//利用修饰符 ?: 可选 加上readonly等于每次遍历出来的key都加上?:并且还都是只读
// type MapPerson<T> = {
//    readonly [getPerson in keyof T]?: T[getPerson]
// }

//利用修饰符 ?: 可选 加上readonly加上+或者- ,+不变,-就会去掉后面的修饰符
type MapPerson<T> = {
    +readonly [getPerson in keyof T]-?: T[getPerson]
 }

type newPerson = MapPerson<Person>

export {}