const fs = require('fs');
const path = require('path');

const garba_endpoint = require('../config/config').dev
const apiKey = require('../config/config').apiKey

module.exports = (app) => {
  // API routes
  fs.readdirSync(__dirname + '/api/').forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app, garba_endpoint, apiKey);
  });
};
