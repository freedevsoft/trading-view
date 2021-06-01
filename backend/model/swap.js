//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var swapInfoSchema = new Schema({
    id: String,
    transaction: {
        id : String,
    },
    timestamp: String,
    pair: {
        id : String,
    },
    sender: String,
    amount0In: String,
    amount1In: String,
    amount0Out: String,
    amount1Out: String,
    to: String,
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

var SwapInfoModel = mongoose.model('SwapInfo', swapInfoSchema );

module.exports = SwapInfoModel;