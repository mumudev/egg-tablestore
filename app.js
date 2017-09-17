'use strict';
const tablestore = require('./lib/tablestore');

module.exports = app => {
  if (app.config.tablestore.app) tablestore(app);
};
