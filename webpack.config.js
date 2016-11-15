module.exports = {
    context: __dirname + '\\js\\src',
    entry: ['./hello-world.jsx'],
    output: {
        path: __dirname + '/js/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
