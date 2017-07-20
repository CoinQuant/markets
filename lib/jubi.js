'use strict';
const _ = require('lodash');
const sdk = require('node-jubi');

module.exports = class JubiSdk {
    async coins() {
        return await sdk.market.coins();
    }

    async ticker(id) {
        return await sdk.market.ticker(id);
    }
};