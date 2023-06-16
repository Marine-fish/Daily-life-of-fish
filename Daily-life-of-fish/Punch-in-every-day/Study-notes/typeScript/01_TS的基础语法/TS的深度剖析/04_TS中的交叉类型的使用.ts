/**
 * 1. 联合类型(满足其中一个就行)
 * 
 * 2.交叉类型就是为了将多个类型同时满足
 */

//1.
type age = string | number

//2.既要满足Plant也要满足Willow
interface Plant {
    hight: number,
    leafage: string
}

interface Willow {
    some: string,
    say: string
}

const info: Plant & Willow = {
    hight: 12,
    leafage: "大叶",
    some: "小",
    say: "参天大树"
}