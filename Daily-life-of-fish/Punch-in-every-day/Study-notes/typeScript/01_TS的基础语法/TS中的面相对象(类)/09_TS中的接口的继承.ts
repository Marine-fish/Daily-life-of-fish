
interface Person {
    name: string,
    age: number
}

interface Teacher extends Person{
    TeachSchool: string
}

//接口被类实现 用implements操作的类函数,接口里的属性都必须要实现
//多个接口可以用 , 隔开
class P implements Person, Teacher {
    name: string
    age: number
    TeachSchool: string
}