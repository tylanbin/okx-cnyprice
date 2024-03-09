const mp = require('okx-markprice');
const axios = require('axios');

async function getCnyPrice(instId) {
    if (instId) {
        try {
            const price = await mp.getMarkPrice(instId);
            let url = 'https://www.okx.com/api/v5/market/exchange-rate';
            const response = await axios.get(url, {
                proxy: {
                    protocol: 'http',
                    host: '127.0.0.1',
                    port: 1081
                }
            });
            const rate = parseFloat(response.data.data[0].usdCny);
            return (price * rate).toFixed(2);
        } catch (error) {
            throw error;
        }
    } else {
        throw 'instId cannot be null.';
    }
}

module.exports.getCnyPrice = getCnyPrice;
