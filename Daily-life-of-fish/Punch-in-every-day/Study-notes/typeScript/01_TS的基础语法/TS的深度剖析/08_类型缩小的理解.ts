/**
 * 1. typeof
 * 
 * 2. ===, !==, ==, and, !=
 * 
 * 3. instanceof(判断**是不是**的实例)
 * 
 * 4. in(判断***有没有***这个属性)
 */

//1.
function getId(id: number | string) {
    if (typeof id === "string") {
        console.log(id)
    }
}
 //2.
type Fruit = "banner" | "apple" | "pear"
function eating(eat: Fruit) {
    if (eat === "apple") {
        console.log("吃苹果")
    }
}

//3. 传入一个日期
function getTime(date: string | Date) {
    //方式一
    // if (typeof date === "string") {
    //     console.log("打印日期,使用Date实例方法")
    // }

    //方式二
    if (date instanceof Date) {
        console.log("打印日期,使用Date实例方法")
    }
}

//4.
interface Fly {
    fly: () => void
}

interface Run {
    run: () => void
}

function go(ary: Fly | Run) {
    if ("fly" in ary) {
        console.log("fly属性是否存在,在ary里")
    }
}

const flesh: Fly = {
    fly: function() {

    }
}

const cat: Run = {
    run() {
        
    }
}

go(flesh)
go(cat)


