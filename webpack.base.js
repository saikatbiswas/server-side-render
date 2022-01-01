module.exports = {
    // Tell webpack to run babel on every file it runs through (es6, es7 code truns into es6 code)
    module:{
        rules:[
            {
                //Compile only .js files
                test: /\.js?$/,
                //Compile es6 to es5
                loader: 'babel-loader',
                //Not run babel inside node_module folder
                exclude: /node_module/,
                // Options that will be passed along to the babel loader
                options: {
                    presets: [
                        //react files
                        'react',
                        // used to handling Acync code
                        'stage-0',
                        // run all transform rules needs to meet the requirments of the latest two browser version
                        ['env', { tragets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
};