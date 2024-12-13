export default {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                type: "javascript/auto",
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'builtin:lightningcss-loader'
                    }
                ]
            }
        ]
    }
};