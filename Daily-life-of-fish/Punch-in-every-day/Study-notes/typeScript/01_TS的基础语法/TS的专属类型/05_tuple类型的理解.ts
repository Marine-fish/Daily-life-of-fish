/**
 * 场景
 * 保存个人信息
 * 可以用数组
 * 因为数组里存入的类型不确定(any[])
 * 用对象
 * 可以给每个key定义类型注解
 * 用元祖类型tuple
 *      ↓
 * 好处: [string, number, number, number]编译后会被移除
 */
const arr: [string, number, number, number] = ["1", 1, 2, 3]
