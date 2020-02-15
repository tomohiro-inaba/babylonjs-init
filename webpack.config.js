module.exports = {
    mode: "development",
    entry: "./src/main.ts",
//    entry: "./src/main.js",
    output: {
        path: `${__dirname}/dist`,
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
};
