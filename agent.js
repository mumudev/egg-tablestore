'use strict';
const tablestore = require('./lib/tablestore');

module.exports = agent => {
  if (agent.config.tablestore.agent) tablestore(agent);
};
