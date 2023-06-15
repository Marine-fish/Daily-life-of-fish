/**
 * : 写要约束的类型
 * 注意: string类型要小写
 *
 * 在终端 tsc 加文件路径 执行TS代码
 * 会生成JS文件,最后将JS文件放入HTML里运行
 * 对以上步骤进行优化
 * 安装ts-node库
 * 还需要依赖另外两个包 tslib @types/node -g
 */
var info = "哈哈哈";
function bar(info) {
    console.log(info);
}
bar("121");
