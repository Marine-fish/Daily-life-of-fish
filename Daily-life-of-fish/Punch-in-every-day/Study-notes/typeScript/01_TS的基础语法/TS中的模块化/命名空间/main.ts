// 如果名字一样就会报错, 所以就出现了命名空间
// export function foo() {}
// export function foo() {}

namespace price {
    function foo(num: number, num1: number): number {
        return num+ num1
    }
}

namespace data {
    function foo(num: number, num1: number): number {
        return num+ num1
    }
}