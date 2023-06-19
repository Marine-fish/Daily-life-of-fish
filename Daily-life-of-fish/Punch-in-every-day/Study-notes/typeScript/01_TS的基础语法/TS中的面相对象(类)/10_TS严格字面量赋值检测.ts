/**
 * 
 */

interface Person {
    name: string
    age: number
}

// const P: Person = {
//     name: "per",
//     age: 23,

//     /**
//      * 报错的原因是p的类型是Person,
//      * Person里只有name和age
//      * 这个时候多个hight,Person里没有
//      * 所以会报错
//      */
//     hight: 1.73
// }

/**
 * 这样通过对象引用赋值就不会报错了
 * 是因为TS在进行类型检测时
 * 如果是一个全新的第一次赋值,会严格按照类型约定来
 * 但是如果是通过引用赋值的操作,那么就表示
 * 再一次赋值已不再是全新的第一次赋值了
 */
const newP = {
    name: "per",
    age: 23,

  
    hight: 1.73
}
const P: Person = newP