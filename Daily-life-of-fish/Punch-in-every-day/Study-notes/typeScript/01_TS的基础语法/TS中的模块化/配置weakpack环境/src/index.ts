import axios from "axios"
/**
 * 进行配置webpack让这段代码在浏览器上运行
 * 第一步初始化pack.json文件来记录要安装包 npm init
 * 第二步npm install webpack webpack--cli -D
 * 第三步创建webpack.config.js文件
 * 第四步,配置加载规则,下载ts-loader -D
 * 第五步, 配置插件, 安装 html-webpack-plugin -D
 * 第六步, 安装npm install webpack-dev-server -D 本地服务
 * 第七步,  tsc --init 初始化TS配置文件
 */
const message: string = "Hello Word"
console.log(message.length)

/**
 * 进行配置,来决定那些东西可以用,哪些东西不能使用
 * 在TS配置文件里处理
 * 通过 target属性来进行配置
 * lib属性可以指定那些东西可以使用,空数组表示没有任何东西可以使用
 */
// lib.dom.d.ts
const hEl = document.createElement("h1")
hEl.textContent = "Hello TS"
document.body.append(hEl)

// lib.es2015.d.ts
const promise = new Promise((resolve, reject) => {})

/***
 * 来第三方库的配置类型文件
 * 01. axios
 */
console.log(function foo() {})
// const p = new Person("per", 20)