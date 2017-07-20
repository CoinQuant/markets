'use strict';

const Market = require('../index.js');
const mk_ = new Market();

async function getCoins() {
    console.log('coins:', await mk_.coins());
}

async function ticker() {
    console.log('ticker:', await mk_.ticker('etc', ['yunbi', 'huobi', 'bter', 'jubi']));
}

async function run() {
    await getCoins();
    await ticker();
}

run();
