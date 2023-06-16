/**
 * unknown类型虽然可以进行随意类型赋值
 * 但是要调用方法时会报错
 * 非要操作就需要进行类型校验
 */
let id: unknown = "xxx"
if (typeof id === "string") {
    console.log(id.length)
}
id = 122
id = {age: 18}

