/**
 * 当类函数声明的成员属性和初始化属性一样时
 * 有个简洁写法
 * 去掉声明成员一样的属性
 * 在初始化属性添加任意一个修饰符
 */
class Movement {
    name: string
    time: string

   constructor(name: string, time: string, public from: string) {
    this.name = name
    this.time = time
    this.from = from
   }
}

export {}