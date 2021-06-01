//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var burnInfoSchema = new Schema({
    id: String,
    transaction: {
        id : String,
    },
    timestamp: String,
    pair: {
        id : String,
    },
    liquidity: String,
    sender: String,
    amount0: String,
    amount1: String,
    to: String,
    logIndex: String,
    amountUSD: String,
    needsComplete: Boolean,
    factory: {
        type: ObjectId,
        ref: 'FactoryInfo'
    },
    tokenUUID:{
        type:ObjectId,
        ref: 'TokenInfo'
    },
    time : { type : Date, default: Date.now }
});

var BurnInfoModel = mongoose.model('BurnInfo', burnInfoSchema );

module.exports = BurnInfoModel;