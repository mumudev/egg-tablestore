'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/tablestore.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/tablestore-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, TableStore')
      .expect(200);
  });
});
