/***
 * name - 项目的名字
 * version - 版本号
 * dependencies - 依赖的东西
 * 用来记录项目的配置信息
 * ....
 * 创建package.json文件的方法:
 * npm init
 * 执行流程
 * package name 取什么名字
 * version 版本号
 * description 描述信息
 * entry point 配置文件路径入口
 * author 作者相关信息
 * license 开源协议
 * private 是否私有 true or false(为true时npm是不能发布)
 * main 设置程序的入口
 * script 设置脚本命令 启动项目 key: 启动名称 value: 程序的入口
 * dependencies 指无论开发环境还是生产环境都需要依赖的包 --save
 * devDependencies 在生产环境是不需要的 --save-dev(-D)
 * peerDependencies 项目的对等依赖, 一个包依赖必须有一个宿主包才行
 * 版本管理
 * semver版本规范 X.Y.Z
 * X 主版本号
 * Y 次版本号
 * Z 修订号
 * X.Y.Z 一个明确的版本不会改变
 * ^ X不变 Y和Z持续保持最新的版本
 * ~ X和Y保持不变, Z持续保持最新的版本
 * engines 指定Node和NPM的版本号
 * browserslist 配置打包后的JavaScript浏览器的兼容情况
 * npm install xx -g (会被添加到环境变量里,在任何位置都可以用终端)
 *  npm install xx (只是会按照到node_modules里只能在局部地方使用)
 * npm init -y
 * 自动填写package.json文件信息
 */