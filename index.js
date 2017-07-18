'use strict';

const _ = require('lodash');
const CONST = require('./config/const.js');

module.exports = class Market {
  constructor() {
    this._sdks = {};
  }

  get platforms() {
    return CONST.PLATFORMS;
  }

  async coins() {
    const pfs = _.keys(this.platforms);
    const coinList = {};
    for (let i = 0; i < pfs.length; i++) {
      let platform_ = pfs[i];
      try {
        const Sdk = require(`./lib/${platform_}.js`);
        this._sdks[platform_] = new Sdk('');
        let list = await (this._sdks[platform_].coins());
        coinList[platform_] = list;
      } catch (e) {
        console.error(`market coins: ${e}`);
      }
    }

    return coinList;
  }

  async ticker(symbol, pf) {
    const pfs = _.keys(this.platforms);
    let info = `${symbol}${CONST.TICKER_INFO.PRICE}`;

    for (let i = 0; i < pfs.length; i++) {
      let platform_ = pfs[i];
      const coinId = symbol.toLowerCase() + this.platforms[platform_]['suffix'];

      try {
        if (!pf.includes(platform_)) continue;
        let price = await this._sdks[platform_].ticker(coinId);
        info += `\n${this.platforms[platform_]['name']}:${price}`;
      } catch (e) {
        if ('yunbi' === platform_) {
          info += `${CONST.TICKER_INFO.YUNBI_UNEXCEPTION}`;
        } else {
          info += `${CONST.TICKER_INFO.TICKER_ERR} 平台：${platform_}`;
          console.error(e);
        }
      }
    }

    return info;
  }
};
