'use strict';
const _ = require('lodash');
const hb = require('node-huobi');

module.exports = class HuobiSdk {
    async coins() {
        return await hb.market.coins();
    }

    async ticker(id) {
        return await hb.market.ticker(id);
    }
};