/**
 * 因为不同系统路径会不一样
 * 就会用path模块
 * 常见的API:
 * 1.
 */
const path = require("path")
//从路径获取信息
//path.extname 后缀名 path.basename 文件名

//将多个路径拼接在一起
//path.join(路径,路径...) path.resolve() 返回一个绝对路径(从右向左,如果匹配到是绝对路径的就会立即停掉)