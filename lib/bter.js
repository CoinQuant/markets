const _ = require('lodash');
const rp = require('request-promise');

module.exports = class BterSdk {
  constructor(accessKey) {
    this._preUrl = 'http://data.bter.com';
    this._accessKey = accessKey;
  }

  async coins() {
    let coinsResult = await rp(this._preUrl + '/api2/1/pairs');

    if ('string' === typeof coinsResult) {
      coinsResult = JSON.parse(coinsResult);
    }

    return coinsResult;
  }

  async ticker(id) {
    const result = await rp(this._preUrl + `/api2/1/ticker/${id}`);
    let priceInfo = JSON.parse(result);

    if ('string' === typeof priceInfo) {
      priceInfo = JSON.parse(priceInfo);
    }

    return _.get(priceInfo, 'last');
  }
};
