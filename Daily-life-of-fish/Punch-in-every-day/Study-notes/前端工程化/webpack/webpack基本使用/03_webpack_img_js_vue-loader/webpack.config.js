const path = require("path")
module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve( __dirname, "./build")
    },
    module: {
        rules: [
            {
                //test匹配什么文件
                test: /\.css$/,
                //use用什么loader进行处理
                // use: [ //多个loader的执行是从后往上
                //     {
                //         loader: "style-loader",

                //     },
                //     {
                //         loader: "css-loader",

                //     }
                    
                // ]
                //简写一: 如果use里只有一个loader
                // loader: "css-loader"
                //简写二: 如果在多个loader里不需要添加其他属性
                use: [
                    "style-loader",
                    "css-loader",
                    //简写: 在postcss.config.js里配置
                    // {
                    //    loader: "postcss-loader",
                    //    options: {
                    //     postcssOptions: {
                    //         plugins: [
                    //             "autoprefixer"
                    //         ]
                    //     }
                            
                    //    }
                    // }
                   
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                    "postcss-loader"
                ]
            },
            
        ]
    }
}