const express = require('express')
const fs = require('fs')
const historyApiFallback = require('connect-history-api-fallback')
const mongoose = require('mongoose')
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('../config/config')
const webpackConfig = require('../webpack.config')

const isDev = process.env.NODE_ENV !== 'production'
const port  = process.env.PORT || 8080;
const fillDBWithProducts = require('../server/routes/api/products').fillDBWithProducts


mongoose.connect(isDev ? config.db_dev : config.db, {useNewUrlParser: true})
mongoose.Promise = global.Promise

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// API routes
require('./routes')(app)

if (isDev) {
  const compiler = webpack(webpackConfig)

  app.use(historyApiFallback({
    verbose: false
  }))

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../client/public'),
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../dist')))

  /* manejo de errores DEV */
  app.use(function(err, req, res, next) {
    if (err) {
      res.status(err.code).json({
        type: err.name,
        message: err.message,
        status: err.code
      })
      return next(err)
    }
  })
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')))
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'))
    res.end();
  })

  /* manejo de errores PROD */
  app.use(function(err, req, res, next) {
    if (err) {
      res.status(err.code).json({
        type: err.name,
        status: err.code
      })
      return next(err)
    }
  })
}



app.listen(port, 'localhost', (err) => {
  if (err) console.log(err)

  console.info('>>> App corriendo en: http://localhost:%s/', port)
})


module.exports = app;
