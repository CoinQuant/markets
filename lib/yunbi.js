const _ = require('lodash');
const Yunbi = require('node-yunbi')();

module.exports = class YunbiSdk {
  async coins() {
    let coinsResult = await Yunbi.getMarkets();

    const coinList = [];
    _.each(coinsResult, coin => {
      coinList.push(coin.id);
    });

    return coinList;
  }

  async ticker(id) {
    const result = await Yunbi.getTicker(id);
    return _.get(result, 'ticker.last');
  }
};
