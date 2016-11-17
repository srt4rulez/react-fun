module.exports = {
    context: __dirname + '\\js\\src',
    entry: {
        'hello-world':   './hello-world.jsx',
        'hello-visitor': './hello-visitor.jsx',
        'fizz-buzz':     './fizz-buzz.jsx',
    },
    output: {
        path: __dirname + '/js/dist/',
        filename: '[name].bundle.js'
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
