import { P } from "./utils/math"
//建议在带入TS类型时, 加一个type前缀(表示导入文件是类型文件)
// import { type Person, type Info} from "./utils/type"
import type {  Person, Info} from "./utils/type"

console.log(P("per", 23))

const Id: Person = {
    num: 123,
    message: "你好"
}

const H: Info = {
    hight: 1.73,
    from: "四川"
}