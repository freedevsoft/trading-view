//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var mintInfoSchema = new Schema({
    id: String,
    transaction: {
        id : String,
    },
    timestamp: String,
    pair: {
        id : String,
    },
    to: String,
    liquidity: String,
    sender: String,
    amount0: String,
    amount1: String,
    logIndex: String,
    amountUSD: String,
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

var MintInfoModel = mongoose.model('MintInfo', mintInfoSchema );

module.exports = MintInfoModel;