'use strict';

const TableStore = require('tablestore');
const assert = require('assert');

module.exports = app => {
  const config = app.config.tablestore;
  assert(config, '[egg-tablestore] config is missing!');
  if (!config.client && !config.clients) {
    assert(config.client, '[egg-tablestore] client or clients is required on config');
  }
  if (config.client) {
    app.tablestore = createOneClient(config.client);
  } else {
    app.tablestore = createMultiClients(config.clients);
  }
  app.TableStore = TableStore;
  app.tablestore.Long = TableStore.Long;
};

function createMultiClients(config) {
  return {
    get(dbName) {
      return createOneClient(config[dbName]);
    },
  };
}

function createOneClient(config) {
  const client = new TableStore.Client(config);
  client.makeRequest = function makeRequest(operation, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params = null;
    }
    const request = new TableStore.Request(this.config, operation, params);
    this.addAllRequestListeners(request);
    if (callback) {
      request.send(callback);
      return request;
    }
    return new Promise(function(resolve, reject) {
      request.send(function(err, data) {
        if (err) {
          return reject(err);
        }
        resolve(data);
      });
    });
  };
  return client;
}
