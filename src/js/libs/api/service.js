'use strict';

import FetchHandler from './fetch-handler';

export default class Service extends FetchHandler {
  constructor() {
    super();
  }

  async loadData(form) {
    return await this.callGetWithParams(form);
  }
}
