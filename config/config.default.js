'use strict';

/**
 * egg-tablestore default config
 * @member Config#TableStore
 * @property {String} SOME_KEY - some description
 */
exports.tablestore = {
  default: {
    database: null,
    connectionLimit: 5,
  },
  app: true,
  agent: false,

  // Single Database
  // client: {
  //   accessKeyId: '<your access key id>',
  //   secretAccessKey: '<your access key secret>',
  //   stsToken: '<your stsToken>', /*When you use the STS authorization, you need to fill in. ref:https://help.aliyun.com/document_detail/27364.html*/
  //   endpoint: '<your endpoint>',
  //   instancename: '<your instance name>'
  // },

  // Multi Databases
  // clients: {
  //   db1: {
  //     accessKeyId: '<your access key id>',
  //     secretAccessKey: '<your access key secret>',
  //     stsToken: '<your stsToken>',
  //     endpoint: '<your endpoint>',
  //     instancename: '<your instance name>'
  //   },
  //   db2: {
  //     accessKeyId: '<your access key id>',
  //     secretAccessKey: '<your access key secret>',
  //     stsToken: '<your stsToken>',
  //     endpoint: '<your endpoint>',
  //     instancename: '<your instance name>'
  //   },
  // },
};
