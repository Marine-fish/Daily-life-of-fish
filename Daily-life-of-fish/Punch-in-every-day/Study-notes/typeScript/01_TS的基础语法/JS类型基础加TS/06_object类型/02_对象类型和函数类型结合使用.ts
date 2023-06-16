/**
 * 这样写可以明确给一个函数传入对象时
 * 给对象里明确指定了key以及value的类型
 * 让调用函数时类型更加明确也更加规范安全
 * 如果对象里的key是不确定的可以加?表示可选
 */

type Info = {
    name: string,
    age: number,
    hight?: number
}

const arg = {
    name: 'per',
    age: 23
}

function foo(potion: Info) {
    console.log(potion.age, potion.name)
}

foo(arg)