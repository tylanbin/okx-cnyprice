# okx-cnyprice

Get mark price from okx and convert them to CNY.

## usage

```sh
npm install okx-cnyprice
# OR
yarn add okx-cnyprice
```

```javascript
const mp = require('okx-cnyprice');
async function main() {
    const btc = await mp.getCnyPrice('BTC-USDT');
    console.log(btc);
}
main();
```
