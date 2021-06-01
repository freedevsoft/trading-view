//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var factoryInfoSchema = new Schema({
    id: String,
    pairCount: Number,
    totalVolumeUSD: String,
    totalVolumeETH: String,
    untrackedVolumeUSD: String,
    totalLiquidityUSD: String,
    totalLiquidityETH: String,
    txCount: String,
    untrackedVolumeUSD: String,
    time : { type : Date, default: Date.now }
});

var FactoryInfoModel = mongoose.model('FactoryInfo', factoryInfoSchema );

module.exports = FactoryInfoModel;