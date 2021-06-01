//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var coinInfoSchema = new Schema({
    symbol: String,
    current_price: String,
    weekly_high: String,
    weekly_low: String,
    increase_weekly_low: String,
    decrease_weekly_high_one: String,
    decrease_weekly_high_two: String,
    twofive_below_weekly_high: String,
    five_below_weekly_high: String,
    ten_below_weekly_high : String,
    fifteen_below_weekly_high: String,
    twenty_below_weekly_high: String,
    twentyfive_below_weekly_high: String,
    thirty_below_weekly_high: String,
    thirtyfive_below_weekly_high: String,
    forty_below_weekly_high: String,
    fortyfive_below_weekly_high: String,
    fifty_below_weekly_high: String,
    fiftyfive_below_weekly_high: String,
    sixty_below_weekly_high: String,
    sixtyfive_below_weekly_high: String,
    seventy_below_weekly_high: String,
    seventyfive_below_weekly_high: String,
    eighty_below_weekly_high: String,
    eightyfive_below_weekly_high: String,
    ninety_below_weekly_high: String,
    ninetyfive_below_weekly_high: String,
    ninetynine_below_weekly_high: String,
    base_currency: String
});

var CoinInfoModel = mongoose.model('CoinInfo', coinInfoSchema );

module.exports = CoinInfoModel;