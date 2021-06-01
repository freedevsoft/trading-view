//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var transactionInfoSchema = new Schema({
    id: String,
    blockNumber: String,
    timestamp: String,
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

var TransactionInfoModel = mongoose.model('TransactionInfo', transactionInfoSchema );

module.exports = TransactionInfoModel;