var axios = require("axios");
var FactoryInfoModel = require("../../../model/factory");
var TokenInfoModel = require("../../../model/token");
var PairInfoModel = require("../../../model/pair");
var UserInfoModel = require("../../../model/user");
var TransactionInfoModel = require("../../../model/transaction");
var MintInfoModel = require("../../../model/mint");
var BurnInfoModel = require("../../../model/burn");
var SwapInfoModel = require("../../../model/swap");
var BundleInfoModel = require("../../../model/bundle");
var TotalInfoModel = require("../../../model/total");

// * function callTheGraphAPI { OPEN
function callTheGraphAPI() {
	// * axios ({ OPEN
	axios({
		url: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
		method: "post",
		// * data { OPEN
		// * query ` { OPEN
		data: {
			query: `
            {
              uniswapFactories(first: 5) {
                id
                pairCount
                totalVolumeUSD
                totalVolumeETH
                untrackedVolumeUSD
                totalLiquidityUSD
                totalLiquidityETH
                txCount
              }
              tokens(first: 100) {
                id
                symbol
                name
                decimals
                tradeVolume
                tradeVolumeUSD
                untrackedVolumeUSD
                txCount
                totalLiquidity
                derivedETH
              }
              pairs(first: 100) {
                id
                    token0 {
                      id
                      symbol
                       name
                    }
                    token1 {
                      id
                      symbol
                       name
                    }
                    reserve0
                    reserve1
                    totalSupply
                    reserveETH
                    reserveUSD
                    trackedReserveETH
                    token0Price
                    token1Price
                    volumeToken0
                    volumeToken1
                    volumeUSD
                    untrackedVolumeUSD
                    txCount
                    createdAtTimestamp
                    createdAtBlockNumber
              }
              users(first: 100) {
                id
                usdSwapped
			}
			transactions(first: 100) {
				id
				blockNumber
				timestamp
			}
			mints(first: 100) {
				id
				transaction {
					id
				}
				timestamp
				pair {
					id
				}
				to
				liquidity
				sender
				amount0
				amount1
				logIndex
				amountUSD
			}	
			burns(first: 100) {
				id
				transaction {
					id
				}
				timestamp
				pair {
					id
				}
				liquidity
				sender
				amount0
				amount1
				to
				logIndex
				amountUSD
				needsComplete
			}	
			swaps(first: 100) {
				id
				transaction {
					id
				}
				timestamp
				pair {
					id
				}
				sender
				amount0In
				amount1In
				amount0Out
				amount1Out
				to
				logIndex
				amountUSD
			}	
			bundles(first: 100) {
				id
				ethPrice
			}	

			
            }
            `,
			// * query ` } CLOSE
			// * data } CLOSE
		},
		// * axios }) CLOSE
		// * axios.then ({ OPEN
	}).then((result) => {
		let factoryData = result.data.data.uniswapFactories;
		let tokenData = result.data.data.tokens;
		let pairData = result.data.data.pairs;
		let userData = result.data.data.users;
		let transactionData = result.data.data.transactions;
		let mintData = result.data.data.mints;
		let burnData = result.data.data.burns;
		let swapData = result.data.data.swaps;
		let bundleData = result.data.data.bundles;
		// * factoryData.forEach ({ OPEN
		factoryData.forEach((each) => {
			let time = Date.now();
			let factoryInfo = {
				id: each.id,
				pairCount: each.pairCount,
				totalLiquidityETH: each.totalLiquidityETH,
				totalLiquidityUSD: each.totalLiquidityUSD,
				totalVolumeETH: each.totalVolumeETH,
				totalVolumeUSD: each.totalVolumeUSD,
				txCount: each.txCount,
				untrackedVolumeUSD: each.untrackedVolumeUSD,
				time: time,
			};

			// * FactoryInfoModel.findOneAndUpdate ( and function { OPEN
			FactoryInfoModel.findOneAndUpdate(
				{ id: each.id, time: time },
				factoryInfo,
				{
					upsert: true,
					new: true,
				},
				function (err, eim) {
					if (err) {
					}
					// * FactoryInfoModel.findOneAndUpdate else { OPEN
					else {
						// * tokenData.forEach ({ OPEN
						tokenData.forEach((eachToken) => {
							let tokenInfo = {
								id: eachToken.id,
								symbol: eachToken.symbol,
								name: eachToken.name,
								decimals: eachToken.decimals,
								tradeVolume: eachToken.tradeVolume,
								tradeVolumeUSD: eachToken.tradeVolumeUSD,
								txCount: eachToken.txCount,
								untrackedVolumeUSD: eachToken.untrackedVolumeUSD,
								totalLiquidity: eachToken.totalLiquidity,
								derivedETH: eachToken.derivedETH,
								factory: eim._id,
								time: time,
							};
							// * TokenInfoModel.findOneAndUpdate ( and function { OPEN
							TokenInfoModel.findOneAndUpdate(
								{ id: eachToken.id, time: time },
								tokenInfo,
								{
									upsert: true,
									new: true,
								},
								function (err, eim) {
									if (err) {
									} else {
									}
									// * TokenInfoModel.findOneAndUpdate }) CLOSE
								}
							);
							// * tokenData.forEach }) CLOSE
						});
						// * pairData.forEach ({ OPEN
						pairData.forEach((eachPair) => {
							let pairInfo = {
								id: eachPair.id,
								token0: {
									id: eachPair.token0.id,
									symbol: eachPair.token0.symbol,
									name: eachPair.token0.name,
								},
								token1: {
									id: eachPair.token1.id,
									symbol: eachPair.token1.symbol,
									name: eachPair.token1.name,
								},
								reserve0: eachPair.reserve0,
								reserve1: eachPair.reserve1,
								totalSupply: eachPair.totalSupply,
								reserveETH: eachPair.reserveETH,
								reserveUSD: eachPair.reserveUSD,
								trackedReserveETH: eachPair.trackedReserveETH,
								token0Price: eachPair.token0Price,
								token1Price: eachPair.token1Price,
								volumeToken0: eachPair.volumeToken0,
								volumeToken1: eachPair.volumeToken1,
								volumeUSD: eachPair.volumeUSD,
								untrackedVolumeUSD: eachPair.untrackedVolumeUSD,
								txCount: eachPair.txCount,
								createdAtTimestamp: eachPair.createdAtTimestamp,
								createdAtBlockNumber: eachPair.createdAtBlockNumber,
								factory: eim._id,
								time: time,
							};
							// * PairInfoModel.findOneAndUpdate ( and function { OPEN
							PairInfoModel.findOneAndUpdate(
								{ id: eachPair.id, time: time },
								pairInfo,
								{
									upsert: true,
									new: true,
								},
								function (err, eim) {
									if (err) {
									} else {
									}
									// * PairInfoModel.findOneAndUpdate }) CLOSE
								}
							);
							// * pairData.forEach }) CLOSE
						});

						// *
						// * NEW SECTION
						// *
						// * userData.forEach ({ OPEN
						userData.forEach((eachUser) => {
							let userInfo = {
								id: eachUser.id,
								usdSwapped: eachUser.usdSwapped,
								factory: eim._id,
								time: time,
							};
							// * UserInfoModel.findOneAndUpdate ( and function { OPEN
							UserInfoModel.findOneAndUpdate(
								{ id: eachUser.id, time: time },
								userInfo,
								{
									upsert: true,
									new: true,
								},
								function (err, eim) {
									if (err) {
									} else {
									}
									// * UserInfoModel.findOneAndUpdate }) CLOSE
								}
							);
							// * userData.forEach }) CLOSE
						});

						// * transactionData.forEach ({ OPEN
						transactionData.forEach((eachTransaction) => {
							let transactionInfo = {
								id: eachTransaction.id,
								blockNumber: eachTransaction.blockNumber,
								timestamp: eachTransaction.timestamp,
								factory: eim._id,
								time: time,
							};
							// * TransactionInfoModel.findOneAndUpdate ( and function { OPEN
							TransactionInfoModel.findOneAndUpdate(
								{ id: eachTransaction.id, time: time },
								transactionInfo,
								{
									upsert: true,
									new: true,
								},
								function (err, eim) {
									if (err) {
									} else {
									}
									// * TransactionInfoModel.findOneAndUpdate }) CLOSE
								}
							);
							// * transactionData.forEach }) CLOSE
						});

						// * mintData.forEach ({ OPEN
						mintData.forEach((eachMint) => {
							let mintInfo = {
								id: eachMint.id,
								transaction: {
									id: eachMint.transaction.id,
								},
								timestamp: eachMint.timestamp,
								pair: {
									id: eachMint.pair.id,
								},
								to: eachMint.to,
								liquidity: eachMint.liquidity,
								sender: eachMint.sender,
								amount0: eachMint.amount0,
								amount1: eachMint.amount1,
								logIndex: eachMint.logIndex,
								amountUSD: eachMint.amountUSD,
								factory: eim._id,
								time: time,
							};
							// * MintInfoModel.findOneAndUpdate ( and function { OPEN
							MintInfoModel.findOneAndUpdate(
								{ id: eachMint.id, time: time },
								mintInfo,
								{
									upsert: true,
									new: true,
								},
								function (err, eim) {
									if (err) {
									} else {
									}
									// * MintInfoModel.findOneAndUpdate }) CLOSE
								}
							);
							// * mintData.forEach }) CLOSE
						});

						// * burnData.forEach ({ OPEN
						burnData.forEach((eachBurn) => {
							let burnInfo = {
								id: eachBurn.id,
								transaction: {
									id: eachBurn.transaction.id,
								},
								timestamp: eachBurn.timestamp,
								pair: {
									id: eachBurn.pair.id,
								},
								liquidity: eachBurn.liquidity,
								sender: eachBurn.sender,
								amount0: eachBurn.amount0,
								amount1: eachBurn.amount1,
								to: eachBurn.to,
								logIndex: eachBurn.logIndex,
								amountUSD: eachBurn.amountUSD,
								needsComplete: eachBurn.needsComplete,
								factory: eim._id,
								time: time,
							};
							// * BurnInfoModel.findOneAndUpdate ( and function { OPEN
							BurnInfoModel.findOneAndUpdate(
								{ id: eachBurn.id, time: time },
								burnInfo,
								{
									upsert: true,
									new: true,
								},
								function (err, eim) {
									if (err) {
									} else {
									}
									// * BurnInfoModel.findOneAndUpdate }) CLOSE
								}
							);
							// * burnData.forEach }) CLOSE
						});

						// * swapData.forEach ({ OPEN
						swapData.forEach((eachSwap) => {
							let swapInfo = {
								id: eachSwap.id,
								transaction: {
									id: eachSwap.transaction.id,
								},
								timestamp: eachSwap.timestamp,
								pair: {
									id: eachSwap.pair.id,
								},
								sender: eachSwap.sender,
								amount0In: eachSwap.amount0In,
								amount1In: eachSwap.amount1In,
								amount0Out: eachSwap.amount0Out,
								amount1Out: eachSwap.amount1Out,
								to: eachSwap.to,
								logIndex: eachSwap.logIndex,
								amountUSD: eachSwap.amountUSD,
								factory: eim._id,
								time: time,
							};
							// * SwapInfoModel.findOneAndUpdate ( and function { OPEN
							SwapInfoModel.findOneAndUpdate(
								{ id: eachSwap.id, time: time },
								swapInfo,
								{
									upsert: true,
									new: true,
								},
								function (err, eim) {
									if (err) {
									} else {
									}
									// * SwapInfoModel.findOneAndUpdate }) CLOSE
								}
							);
							// * swapData.forEach }) CLOSE
						});

						// * bundleData.forEach ({ OPEN
						bundleData.forEach((eachBundle) => {
							let bundleInfo = {
								id: eachBundle.id,
								ethPrice: eachBundle.ethPrice,
								factory: eim._id,
								time: time,
							};
							// * BundleInfoModel.findOneAndUpdate ( and function { OPEN
							BundleInfoModel.findOneAndUpdate(
								{ id: eachBundle.id, time: time },
								bundleInfo,
								{
									upsert: true,
									new: true,
								},
								function (err, eim) {
									if (err) {
									} else {
									}
									// * BundleInfoModel.findOneAndUpdate }) CLOSE
								}
							);
							// * bundleData.forEach }) CLOSE
						});		
						
						for(var i = 0; i < 100; i++){
							let totalInfo={
								id: tokenData[i].id,
								token:{
									time:time,
									id:tokenData[i].id,
									symbol:tokenData[i].symbol,
									name:tokenData[i].name,
									decimals:tokenData[i].decimals,
									tradeVolume:tokenData[i].tradeVolume,
									tradeVolumeUSD:tokenData[i].tradeVolumeUSD,
									untrackedVolumeUSD:tokenData[i].untrackedVolumeUSD,
									txCount:tokenData[i].txCount,
									totalLiquidity:tokenData[i].totalLiquidity,
									derivedETH:tokenData[i].derivedETH,
								},
								pair:{
									id:pairData[i].id,
									token0:{
										id:pairData[i].token0.id,
										symbol:pairData[i].token0.symbol,
										name:pairData[i].token0.name,
									},
									token1:{
										id:pairData[i].token1.id,
										symbol:pairData[i].token1.symbol,
										name:pairData[i].token1.name,
									},
									reserve0:pairData[i].reserve0,
									reserve1:pairData[i].reserve1,
									supply:pairData[i].totalSupply,
									reserveETH:pairData[i].reserveETH,
									reserveUSD:pairData[i].reserveUSD,
									trackedReserveETH:pairData[i].trackedReserveETH,
									token0Price:pairData[i].token0Price,
									token1Price:pairData[i].token1Price,
									volumeToken0:pairData[i].volumeToken0,
									volumeToken1:pairData[i].volumeToken1,
									volumeUSD:pairData[i].volumeUSD,
									untrackedVolumeUSD:pairData[i].untrackedVolumeUSD,
									txCount:pairData[i].txCount,
									createdAtTimestamp:pairData[i].createdAtTimestamp,
									createdAtBlockNumber:pairData[i].createdAtBlockNumber,
								},						
								
								user:{
									id:userData[i].id,
									usdSwapped:userData[i].usdSwapped,
								},

								transaction:{
									id:transactionData[i].id,
									blockNumber:transactionData[i].blockNumber,
									timestamp:transactionData[i].timestamp,
								},	
								
								mint:{
									id:mintData[i].id,
									transaction:{
										id:mintData[i].transaction.id,
									},
									timestamp:mintData[i].timestamp,
									pair:{
										id:mintData[i].pair.id,
									},
									to:mintData[i].to,
									liquidiry:mintData[i].liquidity,
									sender:mintData[i].sender,
									amount0:mintData[i].amount0,
									amount1:mintData[i].amount1,
									logIndex:mintData[i].logIndex,
									amountUSD:mintData[i].amountUSD,
								},

								burn:{
									id:burnData[i].id,
									transaction:{
										id:burnData[i].transaction.id,
									},
									timestamp:burnData[i].timestamp,
									pair:{
										id:burnData[i].pair.id,
									},
									liquidity:burnData[i].liquidity,
									sender:burnData[i].sender,
									amount0:burnData[i].amount0,
									amount1:burnData[i].amount1,
									to:burnData[i].to,
									logIndex:burnData[i].logIndex,
									amountUSD:burnData[i].amountUSD,
									needsComplete:burnData[i].needsComplete,
								},	
								
								swap:{
									id:swapData[i].id,
									transaction:{
										id:swapData[i].transaction.id,
									},
									timestamp:swapData[i].timestamp,
									pair:{
										id:swapData[i].pair.id,
									},
									sender:swapData[i].sender,
									amount0In:swapData[i].amount0In,
									amount1In:swapData[i].amount1In,
									amount0Out:swapData[i].amount0Out,
									amouont1Out:swapData[i].amount1Out,
									to:swapData[i].to,
									logIndex:swapData[i].logIndex,
									amountUSD:swapData[i].amountUSD,
								},


								factory:{
									id: eim.id,
									pairCount: eim.pairCount,
									totalLiquidityETH: eim.totalLiquidityETH,
									totalLiquidityUSD: eim.totalLiquidityUSD,
									totalVolumeETH: eim.totalVolumeETH,
									totalVolumeUSD: eim.totalVolumeUSD,
									txCount: eim.txCount,
									untrackedVolumeUSD: eim.untrackedVolumeUSD,
								},
								time:time,
							};

							TotalInfoModel.findOneAndUpdate(
								{id:tokenData[i].id,time:time},
								totalInfo,
								{
									upsert:true,
									new:true,
								},
								function(err, eim){
									if(err){
										console.log("totalinfor error!",err)

									}else{
										

									}
								}
							)
						}
				













						// * FactoryInfoModel.findOneAndUpdate else } CLOSE
					}
					// * FactoryInfoModel.findOneAndUpdate ) and function } CLOSE
				}
			);
			// * factoryData.forEach }) CLOSE
		});
		// * axios.then }) CLOSE
	});
	// * function callTheGraphAPI } CLOSE
}

exports.callTheGraphAPI = callTheGraphAPI;
