/**联合类型实现的方法 */
// function getLength(arg: string | string[] | number[]) {
//     console.log(arg.length)
// }

// getLength("1214")
// getLength([112,154,5])
// getLength(["112","154","5"])

/**函数重载实现的方法 */
function getLength(arg: string): number
function getLength(arg: string[]): number
function getLength(arg: number[]): number
function getLength(arg: any): any {
    console.log(arg.length)
}

getLength("1214")
getLength([112,154,5])
getLength(["112","154","5"])