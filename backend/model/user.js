//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var userInfoSchema = new Schema({
    id: String,
    usdSwapped: String,
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

var UserInfoModel = mongoose.model('UserInfo', userInfoSchema );

module.exports = UserInfoModel;