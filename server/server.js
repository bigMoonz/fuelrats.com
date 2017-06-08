'use strict'

/******************************************************************************\
  Module imports
\******************************************************************************/

const config = require('./config')
const koa = new (require('koa'))
const path = require('path')

const next = require('next')({
  dev: process.env.NODE_ENV !== 'production',
  dir: path.resolve('.')
})





/******************************************************************************\
  Initialize the app
\******************************************************************************/

next.prepare()
.then(() => {
  // Set up the logger
  koa.use(require('koa-logger')())

  // Configure proxies
  require('./config/proxy')(koa, config)

  // Configure middleware, et al
  require('./config/koa')(koa, config)

  // Configure the router
  require('./config/router')(next, koa, config)

  // Start the server
//  console.log('Listening on port', process.env.PORT || 3000)
  koa.listen(process.env.PORT || 3000)
})





/******************************************************************************\
  Start the server
\******************************************************************************/

//console.log('Listening on port', process.env.PORT || 3000)
//app.listen(process.env.PORT || 3000)
