/**
 * 在一个类型不确定时,也可以用联合类型
 */

let age: number | string = 18
age = "18"
/**
 * 在操作时,要使用类型缩小,因为类型不确定
 */
if (typeof age === "string") {
    console.log(age.length)
}