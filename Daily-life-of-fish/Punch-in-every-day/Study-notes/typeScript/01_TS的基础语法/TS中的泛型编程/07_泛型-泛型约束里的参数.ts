//要对函数传入的参数进行约束
//传入一个对象,第二个参数必须是对象里的任意一个才行

function getObjKeyValue<O, K extends keyof O>(obj: O, value: K) {
    return obj[value]
}

const obj = {
    name: "per",
    age: 23
}

const name = getObjKeyValue(obj, "name")
// const name1 = getObjKeyValue(obj, "aaa") //这样传就会报错

export {}