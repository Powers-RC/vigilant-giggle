// Loaders tell webpack to process certain files as we load dependencies into project
module.exports = { 
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'], 
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
}