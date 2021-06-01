//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var totalInfoSchema = new Schema({
    id:String,
    token:{
        id:String,
        symbol:String,
        name:String,
        decimals:String,
        totalSupply:String,
        tradeVolume:String,
        tradeVolumeUSD:String,
        untrackedVolumeUSD:String,
        txCount:String,
        totalLiquidity:String,
        derivedETH:String,
        time : { type : Date, default: Date.now },
    },
    pair:{
        id:String,
        token0:{
            id:String,
            symbol:String,
            name:String
        },
        token1:{
            id:String,
            symbol:String,
            name:String
        },
        reserve0:String,
        reserve1:String,
        totalSupply:String,
        reserveETH:String,
        reserveUSD:String,
        trackedReserveETH:String,
        token0Price:String,
        token1Price:String,
        volumeToken0:String,
        volumeToken1:String,
        volumeUSD:String,
        untrackedVolumeUSD:String,
        txCount:String,
        createdAtTimestamp:String,
        createdAtBlockNumber:String,
        liquidityProviderCount:String,
    },
    
    user:{
        id:String,
        usdSwapped:String,
    },
    
    transaction:{
        id:String,
        blockNumber:String,
        timestamp:String,
    },
    
    mint:{
        id:String,
        transaction:{
            id:String,
        },
        timestamp:String,
        pair:{
            id:String,
        },
        to:String,
        liquidiry:String,
        sender:String,
        amount0:String,
        amount1:String,
        logIndex:String,
        amountUSD:String,
    },
    
    burn:{
        id:String,
        transaction:{
            id:String
        },
        timestamp:String,
        pair:{
            id:String,
        },
        liquidity:String,
        sender:String,
        amount0:String,
        amount1:String,
        to:String,
        logIndex:String,
        amountUSD:String,
        needsComplete:Boolean,
    },

    swap:{
        id:String,
        transaction:{
            id:String,
        },
        timestamp:String,
        pair:{
            id:String,
        },
        sender:String,
        amount0In:String,
        amount1In:String,
        amount0Out:String,
        amouont1Out:String,
        to:String,
        logIndex:String,
        amountUSD:String,
    },

    


    factory: {
        id: String,
        pairCount: Number,
        totalVolumeUSD: String,
        totalVolumeETH: String,
        untrackedVolumeUSD: String,
        totalLiquidityUSD: String,
        totalLiquidityETH: String,
        txCount: String,
        untrackedVolumeUSD: String,
    },
    time : { type : Date, default: Date.now }
});

var TotalInfoModel = mongoose.model('TotalInfo', totalInfoSchema );

module.exports = TotalInfoModel;