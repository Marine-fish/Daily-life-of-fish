/**
 * 1. 利用typeof和type结合可以获取foo函数的类型
 * 并且给类型定模
 * 
 * 2. 获取foo函数里的this类型
 * 有个内置工具 ThisParameterType
 * 使用方法是通过泛型<>
 * 
 * 3. 去掉this类型,把剩余的类型返回出去
 * OmitThisParameter
 * 
 * 4. 用于绑定上下文的this
 * ThisType
 */

//1.
function foo(this: {name: string}, message: {text: string}) {
    console.log(this)
}

type fooTye = typeof foo

//2.
type fooThisType = ThisParameterType<fooTye>

type fooClType = OmitThisParameter<fooTye>