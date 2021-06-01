//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var pairInfoSchema = new Schema({
    id: String,
    token0:  {
        id : String,
        symbol: String,
        name: String
    },
    token1: {
        id : String,
        symbol: String,
        name: String
    },
    reserve0: String,
    reserve1: String,
    totalSupply: String,
    reserveETH: String,
    reserveUSD: String,
    trackedReserveETH: String,
    token0Price: String,
    token1Price: String,
    volumeToken0: String, 
    volumeToken1: String,
    volumeUSD: String,
    untrackedVolumeUSD: String,
    txCount: String,
    createdAtTimestamp: String,
    createdAtBlockNumber: String,
    liquidityProviderCount: String,
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

var PairInfoModel = mongoose.model('PairInfo', pairInfoSchema );

module.exports = PairInfoModel;