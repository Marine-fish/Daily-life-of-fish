/**
 * 当访问一个类型的特征比较多时,
 * 可以采用两个索引签名
 */

interface Person {
    [index: number]: string
    [key: string]: any
}

const arr: Person = ["1", "2", "3", "4"]
const item = arr[2] //符合 [index: number]: string
const item1 = arr.forEach //符合  [key: string]: any

export {}