function foo() {
    console.log("你好, webpack")
}

const nikeName = "per"
const age = 23
const sum = nikeName + age
console.log(sum)

module.exports = {
    foo,
    sum
}