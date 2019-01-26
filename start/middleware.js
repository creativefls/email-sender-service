const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

/* Global Middleware */
module.exports = function (app) {
  app.use(cors())
  app.use(logger('dev'))
  app.use(express.json({ limit: '50mb' }))
  app.use(express.urlencoded({ limit: '50mb', extended: true }))
  app.use(cookieParser())
  app.use(express.static(path.join(__dirname, '..', 'public')))
}
