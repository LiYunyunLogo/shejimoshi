const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")
module.exports={
    entry: "./src/index2.js",
    output:{
        path:__dirname,
        filename:'./release/bundle.js'
    },
    devServer:{
        port:8888,
        open:true,
        contentBase:path.resolve(__dirname,'./release') 
    },
    module:{
        rules:[
            {
                test:'/\.js?$/',
                exclude:/(node_modules)/,
                loader:['babel-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ]
}