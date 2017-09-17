'use strict';

const TableStore = require('tablestore');

module.exports = app => {
  app.addSingleton('tablestore', createOneClient);
};

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
