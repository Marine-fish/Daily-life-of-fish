/**
 * 利用映射类型
 * 
 */
type MapPerson<T> = {
    [getMe in keyof T ]: T[getMe] //等于将传入的值里的ket全部依次遍历在getMe这个变量接收
}

interface Person {
    name: string
    age: number
}


//   ↕ 完整的拷贝一份

// interface Person {
//     name: string
//     age: number
// }

//使用将接口Person复制可一份
type NewPerson = MapPerson<Person>