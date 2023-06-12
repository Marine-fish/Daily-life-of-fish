const num1 = 2
const num2 = 3
const result = num1 + num2
//node输出
console.log(result)

//node输入
/***
 * 在node 运行的文件路径 后面跟你需要做的操作
 * 获取终端输入的内容通过
 * process对象里的argv容器
 * argv容器包含的内容:
 * node所在的目录
 * 当前文件所在的路径
 * node终端输入的内容
 * 这些都是放在一个数组里,要拿就要通过索引
 */
console.log(process.argv)