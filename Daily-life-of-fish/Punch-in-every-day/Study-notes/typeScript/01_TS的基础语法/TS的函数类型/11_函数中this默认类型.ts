/**
 * 1. 对象中里的函数里的this
 * 默认this类型是any类型
 * 
 * 2. 普通函数里的this
 * 默认this类型是any类型
 * 
 * ---
 * 在终端 tsc --init 初始化一个配置文件tsconfig.json
 * 会对TS文件里的语法进行操作和管理
 * 里的 "noImplicitThis": true, 当this没有明确指向时就会报错
 * 给this指定明确的类型
 */

//1.
const obj = {
    eating: function() {
        console.log(this)
    }
}

//2.第一个参数必须是this,要传入的参数只能从第二个开始传,默认调用
//要使用call明确绑定
function foo(this: {name: string}, age: {age: number}) {
    console.log(this)
}

foo.call({name: "per"}, {age: 23})