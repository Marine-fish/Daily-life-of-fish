import { foo, sum} from "./utils/foo"
console.log(foo(), sum)

/**
 * 执行npx webpack 进行打包
 * npx webpack --entry 指定程序入口路径 ./src/index.js (修改打包的指定入口文件路径)
 * npx webpack --output-filename 打包后的文件夹里的文件名称
 * npx webpack --output-path 打包后的文件夹名称
 * 对以上进行优化
 * 在webpack.config.js里配置定定义信息
 * npx webpack --config 指定webpack.config.js的文件名称
 * 对上面进行优化
 * 将 npx webpack --config 指定webpack.config.js的文件名称放入package.json里的脚本里
 */