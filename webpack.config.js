const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/app/index.js", // Se deja o se quita porque es la ubicacion por defecto, si fuese ota la ruta, se debe establecer
    output: {
        // Si no queremos un nombre distinto a dist, podemos obviar esta configuracion path porque igualmente creará dist/main,js
      path: path.resolve(__dirname, 'dist'), // le decimos a path (lib nativa de node) donde queremos crear los archivos de la compilacion. Si no establecemos el fileName se crea el main.js
      filename: "bundle.js"
    },
    devServer: {
      port: 3000
    },
    module: {
        // webpack de forma nativa no entiend css, por eso se debe instalar con npm i  style-loader y css-loader -D y especificar sus reglas.
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins : [
        // copia el index.html al nuevo index.html con los css y el js incluidos referenciados de manera automatica
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ]
};