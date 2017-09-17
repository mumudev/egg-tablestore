'use strict';

module.exports = {
  get tablestore() {
    return this.app.tablestore || this.agent.tablestore;
  },
  get TableStore() {
    return this.app.TableStore || this.agent.TableStore;
  },
};
