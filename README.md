# egg-tablestore

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-tablestore.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-tablestore
[travis-image]: https://img.shields.io/travis/eggjs/egg-tablestore.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-tablestore
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-tablestore.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-tablestore?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-tablestore.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-tablestore
[snyk-image]: https://snyk.io/test/npm/egg-tablestore/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-tablestore
[download-image]: https://img.shields.io/npm/dm/egg-tablestore.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-tablestore

<!--
Description here.
-->

## Install

```bash
$ npm i egg-tablestore --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.TableStore = {
  enable: true,
  package: 'egg-tablestore',
};
```

## Configuration


### Simple database instance

```js
exports.mysql = {
  // database configuration
  client: {
    accessKeyId: '<your access key id>',
    secretAccessKey: '<your access key secret>',
    stsToken: '<your stsToken>', /*When you use the STS authorization, you need to fill in. ref:https://help.aliyun.com/document_detail/27364.html*/
    endpoint: '<your endpoint>',
    instancename: '<your instance name>'
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```

Usage:

```js
app.mysql.query(sql, values); // you can access to simple database instance by using app.mysql.
```


### Multiple database instance

```js
exports.mysql = {
  clients: {
    // clientId, access the client instance by app.mysql.get('clientId')
    db1: {
      accessKeyId: '<your access key id>',
      secretAccessKey: '<your access key secret>',
      stsToken: '<your stsToken>', /*When you use the STS authorization, you need to fill in. ref:https://help.aliyun.com/document_detail/27364.html*/
      endpoint: '<your endpoint>',
      instancename: '<your instance name>'
    },
    // ...
  },
  // default configuration for all databases
  default: {

  },

  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```


## Example

```js
const client1 = app.tabestore.get('db1');
client1.putRow(params);

const client2 = app.tabestore.get('db2');
client1putRow(params);
//If you want to access TableStore module, you can:
app.TableStore
app.TableStore.Long
```

## Questions & Suggestions

Please open an issue [here](https://github.com/mumudev/egg-tablestore/issues).

## License

[MIT](LICENSE)
