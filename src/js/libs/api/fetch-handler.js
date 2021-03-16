'use strict';

const BASE_URL = 'https://randomuser.me/api/';

export default class FetchHandler {
  constructor() {}

  makeParameters(form) {
    let params = '?';
    let keys = Object.keys(form);
    keys.forEach((key, index) => {
      if (index == keys.length - 1) {
        params += key + '=' + form[key];
      } else {
        params += key + '=' + form[key] + '&';
      }
    });

    return params;
  }

  async callGetWithParams(form) {
    let params = this.makeParameters(form);
    let url = BASE_URL + params;

    let rtn = await fetch(url)
      .then(async response => {
        let json = await response.json();
        return json;
      })
      .catch(error => {
        return {
          error: error.toString(),
        };
      });

    return rtn;
  }
}
