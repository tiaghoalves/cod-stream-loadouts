const fs = require('fs')
const path = require("path")
const webpack = require("webpack")

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// defines where the bundle file will live
const bundlePath = path.resolve(__dirname, "dist")

module.exports = (_env, argv) => {
  let entryPoints = {
    VideoComponent: {
      path: "./src/VideoComponent.tsx",
      outputHtml: "video_component.html",
      build: false
    },
    VideoOverlay: {
      path: "./src/VideoOverlay.tsx",
      outputHtml: "video_overlay.html",
      build: true
    },
    Panel: {
      path: "./src/Panel.tsx",
      outputHtml: "panel.html",
      build: false
    },
    Config: {
      path: "./src/Config.tsx",
      outputHtml: "config.html",
      build: true
    },
    LiveConfig: {
      path: "./src/LiveConfig.tsx",
      outputHtml: "live_config.html",
      build: false
    },
    Mobile: {
      path: "./src/Mobile.tsx",
      outputHtml: "mobile.html",
      build: false
    }
  }

  let entry = {}

  // edit webpack plugins here!
  let plugins = [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin()
  ]

  for (name in entryPoints) {
    if (entryPoints[name].build) {
      entry[name] = entryPoints[name].path;

      if (argv.mode === 'production') {
        plugins.push(new HtmlWebpackPlugin({
          inject: true,
          chunks: [name],
          template: './template.html',
          filename: entryPoints[name].outputHtml
        }))
      }
    }
  }

  let config = {
    //entry points for webpack- remove if not used/needed
    entry,
    devtool: 'inline-source-map',
    optimization: {
      minimize: false, // this setting is default to false to pass review more easily. you can opt to set this to true to compress the bundles, but also expect an email from the review team to get the full source otherwise. 
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "react-svg-loader",
              options: {
                jsx: true // true outputs JSX tags
              }
            }
          ]
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader", // compiles Sass to CSS, using Node Sass by default
          ]
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          loader: "file-loader",
          options: {
            name: "img/[name].[ext]"
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader',
          ],
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.tsx']
    },
    output: {
      filename: "[name].bundle.js",
      path: bundlePath
    },
    plugins
  }

  if (argv.mode === 'development') {
    config.devServer = {
      contentBase: path.join(__dirname, 'public'),
      host: argv.devrig ? 'localhost.rig.twitch.tv' : 'localhost',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      port: 8080
    }
    config.devServer.https = true
  }

  if (argv.mode === 'production') {
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          chunks: 'all',
          test: /node_modules/,
          name: false
        }
      },
      name: false
    }
  }

  return config;
}