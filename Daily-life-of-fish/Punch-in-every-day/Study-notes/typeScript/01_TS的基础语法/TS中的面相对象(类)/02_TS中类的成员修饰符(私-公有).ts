/**
 * 修饰符public
 * 加了后可以在任何位置都可以访问属于公有(默认)
 * private
 * 只能在类的内部才能访问私有
 * 在继承的子类内部可以访问
 */

class Person {
   public name: string
   private  age: number

    constructor(name: string, age: number) {
        this.age = age
        this.name = name
    }
}