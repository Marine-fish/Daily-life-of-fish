/**
 * 模块被第一次导入时, 模块的js代码会被执行一次
 * 当模块被多次导入时,会由每个对象的module里的loaded属性进行缓存
 * loaded属性为false表示还没加载 true表示已经加载 多次导入 导入的
 * 模块代码只会执行一次
 */