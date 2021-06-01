var express = require('express');
var router = express.Router();
var CoinInfoModel = require('../model/coin');
var TokenInfoModel = require('../model/token');
var PairInfoModel = require('../model/pair');
var UserInfoModel = require('../model/user');
var TransactionInfoModel = require('../model/transaction');
var MintInfoModel = require('../model/mint');
var BurnInfoModel = require('../model/burn');
var SwapInfoModel = require('../model/swap');
var BundleInfoModel = require('../model/bundle');
var TotalInfoModel = require("../model/total");

router.get('/getCoingeckoInfo', async function(req, res, next) {

    let base_currency = req.query.base_currency;
    let coinInfo = await CoinInfoModel.find({base_currency}).select('-_id -__v').lean();

    res.json([...coinInfo])
});


router.post('/getUniswapInfo',async function(req, res, next) {
    console.log("tokenInfoCount.length()")
    let tokenInfo = await TokenInfoModel.find({}).select('-_id -__v').populate('factory', '-_id -__v').skip(req.body.startRow).limit(20).lean();
    let pairInfo = await PairInfoModel.find({}).select('-_id -__v').skip(1).limit(5).lean();
    let userInfo = await UserInfoModel.find({}).select('-_id -__v').skip(req.body.startRow).limit(20).lean();
    let transactionInfo = await TransactionInfoModel.find({}).select('-_id -__v').skip(req.body.startRow).limit(20).lean();
    let mintInfo = await MintInfoModel.find({}).select('-_id -__v').skip(req.body.startRow).limit(20).lean();
    let burnInfo = await BurnInfoModel.find({}).select('-_id -__v').skip(req.body.startRow).limit(20).lean();
    let swapInfo = await SwapInfoModel.find({}).select('-_id -__v').skip(req.body.startRow).limit(20).lean();
    let bundleInfo = await BundleInfoModel.find({}).select('-_id -__v').skip(req.body.startRow).limit(20).lean();
    let tokenInfoCount = await TokenInfoModel.find({}).select('-_id -__v').populate('factory', '-_id -__v').lean();
    let rows = [];
    for(const i in tokenInfo) {
        let {factory, ...tempTokenInfo} = tokenInfo[i];

        let eachPairInfo = pairInfo[i];
        let eachUserInfo = userInfo[i];
        let eachTransactionInfo = transactionInfo[i];
        let eachMintInfo = mintInfo[i];
        let eachBurnInfo = burnInfo[i];
        let eachSwapInfo = swapInfo[i];
        let eachBundleInfo = bundleInfo[i];
        rows.push({factory, token: tempTokenInfo, pair: eachPairInfo, user: eachUserInfo, transaction: eachTransactionInfo, mint: eachMintInfo, burn: eachBurnInfo, swap: eachSwapInfo, bundle: eachBundleInfo});
    }
    let total = await TotalInfoModel.find({}).select('-_id -__v').populate('factory', '-_id -__v').skip(req.body.startRow).limit(20).lean();

    let sortModel=req.body.sortModel
    let filterModel=req.body.filterModel
    let filter={}
    let sort="{"
    console.log(sortModel)
    let nodeOption=[]
    let i=0
    await sortModel.forEach(element => {
         i+=1;
        if(sortModel.length>0){
        let sortVerify=0
        if (element.sort=="asc"){
            sortVerify=1
        }
        if(element.sort=="desc"){
            sortVerify=-1
        }
        if(sortModel.length==i){
        sort =sort  + '"' + element.colId  + '"' + ":" +sortVerify +"}"}
        else{
            sort =sort  + '"' + element.colId  + '"' + ":" +sortVerify + ","
        }    
    }
    });
   
    let filterModel_length=0
    for (var key in filterModel) {
        if (filterModel.hasOwnProperty(key)) {
         filterModel_length+=1
        }
    }
  
    let filterCond=""
    for (var key in filterModel) {
        console.log(key,"--------------",filterModel[key].filter,"---",filterModel[key].length)
        if (filterModel.hasOwnProperty(key)) {

                hasOperater=filterModel[key].operator
                if(!hasOperater){
                 
                    if (filterModel[key].type=="contains"){
                        filterCond=new RegExp(filterModel[key].filter,"i")
                    }
                    else if (filterModel[key].type == "startsWith"){
                        filterCond=new RegExp("^"+filterModel[key].filter,"i") }
                    else if( filterModel[key].type == "endsWith" ){
                        filterCond=new RegExp(filterModel[key].filter+"$","i") }
                    else if (filterModel[key].type == "notContains"){
                        filterCond={"$not":new RegExp(filterModel[key].filter,"i")}}
                    else if (filterModel[key].type =="notEqual"){
                        filterCond={"$not":filterModel[key].filter} }
                    else if (filterModel[key].type =="equal"){
                        filterCond= + filterModel[key].filter  }
                    
                    filter[key]=filterCond

                }
                if(hasOperater=="OR"){
                    console.log("conditionType",filterModel[key].condition1.type)
                    if (filterModel[key].condition1.type=="contains"){
                        filterCond=new RegExp(filterModel[key].condition1.filter,"i")
                    }
                    else if (filterModel[key].condition1.type == "startsWith"){
                        filterCond=new RegExp("^"+filterModel[key].condition1.filter,"i") }
                    else if( filterModel[key].condition1.type == "endsWith" ){
                        filterCond=new RegExp(filterModel[key].condition1.filter+"$","i") }
                    else if (filterModel[key].condition1.type == "notContains"){
                        filterCond={"$not":new RegExp(filterModel[key].condition1.filter,"i")}}
                    else if (filterModel[key].condition1.type =="notEqual"){
                        filterCond={"$not":filterModel[key].condition1.filter} }
                    else if (filterModel[key].condition1.type =="equal"){
                        filterCond= + filterModel[key].condition1.filter  }

                    if (filterModel[key].condition2.type=="contains"){
                        filterCond1=new RegExp(filterModel[key].condition2.filter,"i")
                    }
                    else if (filterModel[key].condition2.type == "startsWith"){
                        filterCond1=new RegExp("^"+filterModel[key].condition2.filter,"i") }
                    else if( filterModel[key].condition2.type == "endsWith" ){
                        filterCond1=new RegExp(filterModel[key].condition2.filter+"$","i") }
                    else if (filterModel[key].condition2.type == "notContains"){
                        filterCond1={"$not":new RegExp(filterModel[key].condition2.filter,"i")}}
                    else if (filterModel[key].condition2.type =="notEqual"){
                        filterCond1={"$not":filterModel[key].condition2.filter} }
                    else if (filterModel[key].condition2.type =="equal"){
                        filterCond1= + filterModel[key].condition2.filter  }
                    let  cond1={}, cond2={}, filterTemp={}
                    cond1[key]=filterCond
                    cond2[key]=filterCond1

                    filterTemp["$or"]=[cond1, cond2]
                    filter["$and"]=[filterTemp]
                    

                }
                if(hasOperater=="AND"){
                    console.log("conditionType",filterModel[key].condition1.type)
                    if (filterModel[key].condition1.type=="contains"){
                        filterCond=new RegExp(filterModel[key].condition1.filter,"i")
                    }
                    else if (filterModel[key].condition1.type == "startsWith"){
                        filterCond=new RegExp("^"+filterModel[key].condition1.filter,"i") }
                    else if( filterModel[key].condition1.type == "endsWith" ){
                        filterCond=new RegExp(filterModel[key].condition1.filter+"$","i") }
                    else if (filterModel[key].condition1.type == "notContains"){
                        filterCond={"$not":new RegExp(filterModel[key].condition1.filter,"i")}}
                    else if (filterModel[key].condition1.type =="notEqual"){
                        filterCond={"$not":filterModel[key].condition1.filter} }
                    else if (filterModel[key].condition1.type =="equal"){
                        filterCond= + filterModel[key].condition1.filter  }

                    if (filterModel[key].condition2.type=="contains"){
                        filterCond1=new RegExp(filterModel[key].condition2.filter,"i")
                    }
                    else if (filterModel[key].condition2.type == "startsWith"){
                        filterCond1=new RegExp("^"+filterModel[key].condition2.filter,"i") }
                    else if( filterModel[key].condition2.type == "endsWith" ){
                        filterCond1=new RegExp(filterModel[key].condition2.filter+"$","i") }
                    else if (filterModel[key].condition2.type == "notContains"){
                        filterCond1={"$not":new RegExp(filterModel[key].condition2.filter,"i")}}
                    else if (filterModel[key].condition2.type =="notEqual"){
                        filterCond1={"$not":filterModel[key].condition2.filter} }
                    else if (filterModel[key].condition2.type =="equal"){
                        filterCond1= + filterModel[key].condition2.filter  }
                    let  cond1={}, cond2={}, filterTemp={}
                    cond1[key]=filterCond
                    cond2[key]=filterCond1

                    filterTemp["$and"]=[cond1, cond2]
                    filter["$and"]=[filterTemp]
                }
            
        }

    }
   
    let totalData;
    let totalDataForlength;
    if (sortModel.length==0&&filterModel_length !=0){
        totalData= await TotalInfoModel.aggregate([
            { $match: filter },
            { $skip: req.body.startRow },
            { $limit : 20 }
         ])
         totalDataForlength= await TotalInfoModel.aggregate([
            { $match: filter }
         ])
    }
    if (sortModel.length!=0&&filterModel_length==0){
        let obj= JSON.parse(sort)
        totalData= await TotalInfoModel.aggregate([
            { $skip: req.body.startRow },
            { $sort : obj },
            { $limit : 20 },

         ])
         totalDataForlength = await TotalInfoModel.find({}).select('-_id -__v').lean();
    }
   if(sortModel.length!=0&&filterModel_length!=0){
    let obj= JSON.parse(sort)
    totalData= await TotalInfoModel.aggregate([
        { $match: filter},
        { $sort : obj },
        { $skip: req.body.startRow },
        { $limit : 20 }
     ])
     totalDataForlength= await TotalInfoModel.aggregate([
        { $match: filter}
     ])
    
    
    }


     if(sortModel.length==0&&filterModel_length==0){
        totalData= await TotalInfoModel.aggregate([
            { $skip: req.body.startRow },
            { $limit : 20 }
         ])
         totalDataForlength = await TotalInfoModel.find({}).select('-_id -__v').lean();
        
        }
    response = {'rows':totalData, 'lastRow':totalDataForlength.length}
    res.json(response) //[...response]
});


module.exports = router;