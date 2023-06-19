/**
 *  [key: number | string]里的key的类型只能
 * 是number或者string类型的其中一个不能写联合类型
 */
interface Person {
    // [key: number | string]: string
    // [key: number]: string
    // [key: string]: any
    [key: string]: string 

}

/**
 *  [key: number]: string符合 ["1", "2", "3", "4"]
 *  [key: string]: any 符合 ["1", "2", "3", "4"]
 * 因为通过arr[0] === arr["0"]
 * [key: string]: string 其实是符合的但是会报错 ["1", "2", "3", "4"]
 * 因为严格的字面量类型检测虽然如果调用数组的其他方法它的返回值就
 * 不符合string饿了,例如 arr.forEach
 * 
 */
const arr: Person = ["1", "2", "3", "4"]