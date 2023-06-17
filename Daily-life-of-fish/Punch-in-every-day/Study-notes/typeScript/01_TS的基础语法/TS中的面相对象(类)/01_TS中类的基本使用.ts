class Job {
    //声明属性
    name: string = ''
    age: number = 10
    constructor(name: string, age: number) {
        //在TS中不能直接通过this去操作属性, 必须要声明
        this.age = age
        this.name = name
    }
}

const job1 = new Job("老师", 22)
const job2 = new Job("学生", 15)