const mp = require('./index');

async function main() {
    const btc = await mp.getCnyPrice('BTC-USDT');
    console.log(btc);
}

main();
