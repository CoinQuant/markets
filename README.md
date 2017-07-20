# node-market

主流平台行情SDK, 当前支持聚币网、云币网、火币网、比特儿

## install

```shell
npm i git+https://github.com/SuperDBJ/markets.git -S
```

## Quick Start

```shell
const Market = require('markets');

const mk_ = new Market();

async function getCoins() {
    console.log('coins:', await mk_.coins());
}

async function ticker() {
    console.log('ticker:', await mk_.ticker('etc', ['yunbi', 'huobi']));
}

getCoins();

setTimeout(function () {
    ticker();
}, 2000);
```
