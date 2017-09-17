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

## 依赖说明

### 依赖的 egg 版本

egg-tablestore 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.TableStore = {
  enable: true,
  package: 'egg-tablestore',
};
```

## 使用场景


### 单数据源

```js
exports.tabestore = {
  // 单数据库信息配置
  client: {
    accessKeyId: '<your access key id>',
    secretAccessKey: '<your access key secret>',
    stsToken: '<your stsToken>', /*When you use the STS authorization, you need to fill in. ref:https://help.aliyun.com/document_detail/27364.html*/
    endpoint: '<your endpoint>',
    instancename: '<your instance name>'
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};
```

使用方式：

```js
app.tabestore.query(sql, values); // 单实例可以直接通过 app.tabestore 访问
```

### 多数据源

```js
exports.tabestore = {
  clients: {
    // clientId, 获取client实例，需要通过 app.tabestore.get('clientId') 获取
    db1: {
      accessKeyId: '<your access key id>',
      secretAccessKey: '<your access key secret>',
      stsToken: '<your stsToken>', /*When you use the STS authorization, you need to fill in. ref:https://help.aliyun.com/document_detail/27364.html*/
      endpoint: '<your endpoint>',
      instancename: '<your instance name>'
    },
    // ...
  },
  // 所有数据库配置的默认值
  default: {

  },

  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};
```

使用方式：

```js
const client1 = app.tabestore.get('db1');
client1.query(sql, values);

const client2 = app.tabestore.get('db2');
client2.query(sql, values);
```

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
