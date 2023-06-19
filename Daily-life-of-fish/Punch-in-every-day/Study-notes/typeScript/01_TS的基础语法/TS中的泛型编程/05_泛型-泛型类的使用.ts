class Person<T = string> {
    name: T
    age: T
    constructor(name: T, age: T) {
        this.age = age
        this.name = name
    }
}

const P = new Person<string>("per", "xxx")
const P1 = new Person<number>(123, 321)

export {}