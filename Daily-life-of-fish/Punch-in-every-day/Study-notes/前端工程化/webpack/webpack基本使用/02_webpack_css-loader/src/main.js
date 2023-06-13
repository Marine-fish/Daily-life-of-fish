import { foo, sum} from "./utils/foo"
import "./component/divEl"
console.log(foo(), sum)

/**
 * You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.
 * 在添加完CSS模块后进行打包报这样的错误表示
 * 没有安装解析CSS的loader
 * loader的作用是用于对于模块里的源代码进行解析
 * 对于js文件之外的webpack无法正常解析,这时候就需要对应的loader去解析
 * 就需要在webpack.config.js文件里配置解析loader的规则
 * module(模块) : {rules(规则): [{}]}
 * CSS => css-loader
 * npm install css-loader -D 局部安装
 * style => style-loader 
 * 是给样式模块进行解析
 * 如果有些样式属性存在兼容性问题这个时候就需要
 * postcss-loader来自动添加浏览器后缀
 * 使用postcss-loader还需要借助插件 autoprefixer
 * 现在已经有 postcss-preset-env 来代替了autoprefixer插件
 */