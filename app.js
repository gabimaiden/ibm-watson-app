const { response } = require('express');
const express = require('express');

const app = express()

const routes = require('./routes/routes')

app.use('/api/v1', routes);

module.exports = app;