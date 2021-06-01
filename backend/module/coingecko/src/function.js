var axios = require('axios');
var CoinInfoModel = require('../../../model/coin');

const coins = ['bitcoin', 'ethereum', 'link', 'polkadot', 'aave', 'sushi', 'uniswap', 'curve-dao-token'];
const base_currencies = ['btc', 'eth', 'usd'];

function callTheCoingeckoAPI() {
    coins.forEach((coin) => {
        base_currencies.forEach((base_currency) => {
            axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${base_currency}&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false`)
            .then((result) => {
                Object.keys(result.data).forEach(function (key) {
                    let current_price = result.data[key][base_currency];
                    axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${base_currency}&days=7&interval=1`)
                        .then((result) => {
                            let history_data = result.data.prices;
                            let weekly_low = getMin(history_data);
                            let weekly_high = getMax(history_data);

                            let increase_weekly_low = (current_price - weekly_low) * 100 / weekly_low;
                            let decrease_weekly_high = (weekly_high - current_price) * 100 / current_price;
                            let decrease_weekly_high_one, decrease_weekly_high_two;
                            if (decrease_weekly_high > weekly_low)
                                decrease_weekly_high_one = decrease_weekly_high;
                            else
                                decrease_weekly_high_two = decrease_weekly_high;

                            let twofive_below_weekly_high =
                            weekly_high / 1.025;                             
                            let five_below_weekly_high =
                            weekly_high / 1.05;
                            let ten_below_weekly_high =
                            weekly_high / 1.1;
                            let fifteen_below_weekly_high =
                            weekly_high / 1.15;
                            let twenty_below_weekly_high =
                            weekly_high / 1.2;
                            let twentyfive_below_weekly_high =
                            weekly_high / 1.25;
                            let thirty_below_weekly_high =
                            weekly_high / 1.3;
                            let thirtyfive_below_weekly_high =
                            weekly_high / 1.35;
                            let forty_below_weekly_high =
                            weekly_high / 1.4;
                            let fortyfive_below_weekly_high =
                            weekly_high / 1.45;
                            let fifty_below_weekly_high =
                            weekly_high / 1.5;
                            let fiftyfive_below_weekly_high =
                            weekly_high / 1.55;
                            let sixty_below_weekly_high =
                            weekly_high / 1.6;                          
                            let sxityfive_below_weekly_high =
                            weekly_high / 1.65;                          
                            let seventy_below_weekly_high =
                            weekly_high / 1.7;
                            let seventyfive_below_weekly_high =
                            weekly_high / 1.75;
                            let eighty_below_weekly_high =
                            weekly_high / 1.8;
                            let eightyfive_below_weekly_high =
                            weekly_high / 1.85;
                            let ninety_below_weekly_high =
                            weekly_high / 1.9;
                            let ninetyfive_below_weekly_high =
                            weekly_high / 1.95;
                            let ninetynine_below_weekly_high =
                            weekly_high / 1.99;                          

                            let coinInfo = {	
                                symbol: coin,	
                                current_price: current_price,	
                                weekly_low: weekly_low,	
                                weekly_high: weekly_high,	
                                increase_weekly_low,	
                                decrease_weekly_high_one,	
                                decrease_weekly_high_two,
                                twofive_below_weekly_high,
                                five_below_weekly_high,
                                ten_below_weekly_high,
                                fifteen_below_weekly_high,
                                twenty_below_weekly_high,
                                twentyfive_below_weekly_high,
                                twentyfive_below_weekly_high,
                                thirty_below_weekly_high,
                                thirtyfive_below_weekly_high,
                                forty_below_weekly_high,
                                fortyfive_below_weekly_high,
                                fifty_below_weekly_high,
                                fiftyfive_below_weekly_high,
                                sixty_below_weekly_high,
                                sxityfive_below_weekly_high,
                                seventy_below_weekly_high,
                                seventyfive_below_weekly_high,
                                eighty_below_weekly_high,
                                eightyfive_below_weekly_high,
                                ninety_below_weekly_high,
                                ninetyfive_below_weekly_high,
                                ninetynine_below_weekly_high,
                                base_currency
                            };

                                CoinInfoModel.findOneAndUpdate({symbol: coin, base_currency}, coinInfo, {
                                    upsert: true,
                                    new: true
                                }, function (err, pim) {
                                    if (err) {
                                    } else {
                                    }
                                });
                            })
                    });
                });
        })
    });
}

function getMax(arr) {
    var max;
    for (var i = 0; i < arr.length; i++) {
        if (max == null || parseInt(arr[i][1]) > parseInt(max[1]))
            max = arr[i];
    }
    return max[1];
}

function getMin(arr) {
    var min;
    for (var i = 0; i < arr.length; i++) {
        if (min == null || parseInt(arr[i][1]) < parseInt(min[1]))
            min = arr[i];
    }
    return min[1];
}

exports.callTheCoingeckoAPI = callTheCoingeckoAPI;