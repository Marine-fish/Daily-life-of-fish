/**
 * 定义一个接口
 * 这样写接口的类型就是固定的了
 */
// interface Person {
//     name: string
//     age: number
// }

// const p: Person = {
//     name: "per",
//     age: 23
// }

interface Person<T, E> {
    name: T
    age: E
}

const p: Person<string, number> = {
    name: "per",
    age: 23
}