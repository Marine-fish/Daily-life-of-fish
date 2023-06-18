/**
 * 
 */

interface ArrFace {
    //索引签名 可以通过索引去访问,其返回值是字符串类型
    [xxx: number]: string
    length: number
}

//一个数组可以通过索引去获取对应的值
const arr: string[] = ["1", "2", "3", "5"]
console.log(arr[0])

//如果去定义一个方法去遍历数组(但是不确定数组里存入的值的类型)
//第一个办法可以用元组类型,给函数定义类型.因为数组可以通过length
function arrLen(arr: ArrFace) {
    arr[0]
    arr[1]

}
arrLen(arr)
const tuple: [string, string] = ["55", "2323"]
arrLen(tuple)


export {}