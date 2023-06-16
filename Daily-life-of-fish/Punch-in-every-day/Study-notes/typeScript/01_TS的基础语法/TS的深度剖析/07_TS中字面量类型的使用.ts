/**
 * 1. 定义一个字面量类型
 * 
 * 2. 将多个字面量类型联合起来 |
 */

//1.
const age = 'per'
const info: 'lo' = 'lo'

//2.
type Foo = "left" | "center" | "top"
const bar: Foo = "left"