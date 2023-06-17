/**
 * 修饰符 readonly
 * 表示这个属性只能读取但是不能进行操作修改
 */

class Game {
    readonly name: string
    time: string

    constructor(name: string, time: string) {
        this.name = name
        this.time = time
    }
}

const Mario = new Game("Game", "2013")
console.log(Mario.name)