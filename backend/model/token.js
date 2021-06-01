//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var tokenInfoSchema = new Schema({
    id: String,
    symbol: String,
    name: String,
    decimals: String,
    totalSupply: String,
    tradeVolume: String,
    tradeVolumeUSD: String,
    untrackedVolumeUSD: String,
    txCount: String,
    totalLiquidity: String,
    derivedETH: String,
    factory: {
        type: ObjectId,
        ref: 'FactoryInfo'
    },
    time : { type : Date, default: Date.now }
});

var TokenInfoModel = mongoose.model('TokenInfo', tokenInfoSchema );

module.exports = TokenInfoModel;