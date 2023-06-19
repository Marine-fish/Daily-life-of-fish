/**
 * 定义枚举类型
 * 关键字 enum
 * 默认值是从上到下一次是0++
 * 如果给每个都设置明确的值,那么值会在明确值的
 * 基础上依次递增
 */
// enum Person {
//     name,
//     age,
//     hight,

// }

// enum Person {
//     name = 10,
//     age = 30,
//     hight, //31

// }

enum Person {
    name = "name",
    age = "age",
    hight = "hight", 

}

//枚举赋值
const p: Person = Person.age

export {}