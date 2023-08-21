const Coin = require('../models/coin.model')
const excelValue = require('../models/excelValue.model')

class calculatingService {

    

    async calculate(){
       try{
         console.log(('start calc'))

        const coins = await Coin.find({})
           const value3 = await excelValue.findOne({name: "row_3"})
           const value6 = await excelValue.findOne({name: "row_6"})
        for (let coinsKey in coins) {
            try {
                coins[coinsKey].rating = 0;
                let value_BM3 = 0,
                value_BN3 = 0,
                value_BO3 = 0,
                value_BP3 = 0,
                value_BQ3 = 0,
                value_AH3 =0

           
            // if(Number(coins[coinsKey].wallet1)>value6.wallet1) {
            //     value_BM3=value3.wallet1
            // }
            // else value_BM3 =1/Number(coins[coinsKey].wallet1)*value3.wallet1
            // if(1/Number(coins[coinsKey].wallet2)*value3.wallet2>value3.wallet2) {
            //     value_BN3=value3.wallet2
            // }
            // else value_BN3=1/Number(coins[coinsKey].wallet2)*value3.wallet2
            // if(1/Number(coins[coinsKey].wallet3)*value3.wallet3>value3.wallet3) {
            //     value_BO3=value3.wallet3
            // }
            // else value_BO3=1/Number(coins[coinsKey].wallet3)*value3.wallet3
            // if(1/Number(coins[coinsKey].wallet4)*value3.wallet4>value3.wallet4) {
            //     value_BP3=value3.wallet4
            // }
            // else value_BP3=1/Number(coins[coinsKey].wallet4)*value3.wallet4
            // if(1/Number(coins[coinsKey].wallet5)*value3.wallet5>value3.wallet5) {
            //     value_BQ3=value3.wallet5
            // }
            // else value_BQ3=1/Number(coins[coinsKey].wallet5)*value3.wallet5

            
            //1
            if(coins[coinsKey].ath_percent> value6.ath_percent) {
                coins[coinsKey].rating += Number(value3.ath_percent)
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].ath_percent)/(value6.ath_percent*value3.ath_percent)
            }
           

            //2
            if(coins[coinsKey].max_cap > value6.max_cap) {
                coins[coinsKey].rating += Number(value3.max_cap)
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].max_cap)/(value6.max_cap*value3.max_cap)
            }
               
            //3
            if(Number(coins[coinsKey].x_on_token_sales)>value6.x_on_token_sales) {
                coins[coinsKey].rating +=Number(value3.x_on_token_sales)
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].x_on_token_sales)/(value6.x_on_token_sales*value3.x_on_token_sales)
            }
            //4
            if(coins[coinsKey].total_involved > value6.total_involved) {
                coins[coinsKey].rating += Number(value3.total_involved)
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].total_involved)/(value6.total_involved*value3.total_involved)
            }
            
            //5
            if(coins[coinsKey].percent_emission > value6.percent_emission) {
                coins[coinsKey].rating += Number(value3.percent_emission)
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].percent_emission)/(value6.percent_emission*value3.percent_emission)
            }
            // console.log("coins[coinsKey].percent_emission",coins[coinsKey].percent_emission);

            // console.log("value6.percent_emission", value6.percent_emission);
            // console.log("value3.percent_emission", value3.percent_emission);

            //6
            if(coins[coinsKey].emission_max_rate > value6.emission_max_rate) {
                coins[coinsKey].rating += Number(value3.emission_max_rate) 
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].emission_max_rate)/(value6.emission_max_rate*value3.emission_max_rate)
            }
           


            // //7
            // coins[coinsKey].rating += value_BM3

            // //8
            // coins[coinsKey].rating += value_BN3
            
            // //9
            // coins[coinsKey].rating += value_BO3
            
            // //10
            // coins[coinsKey].rating += value_BP3
            
            // //11
            // coins[coinsKey].rating += value_BQ3
           
            //7
            if(coins[coinsKey].number_of_funds_invested >value6.number_of_funds_invested) {
                coins[coinsKey].rating += Number(value3.number_of_funds_invested)  
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].number_of_funds_invested)/(value6.number_of_funds_invested*value3.number_of_funds_invested)
            }
           


            //8
            if(coins[coinsKey].holders >value6.holders) {
                coins[coinsKey].rating += Number(value3.holders)  
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].holders)/value6.holders*value3.holders
            }

            
             //9
            if(coins[coinsKey].number_of_exchangers >value6.number_of_exchangers) {
                coins[coinsKey].rating += Number(value3.number_of_exchangers)  
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].number_of_exchangers)/(value6.number_of_exchangers*value3.number_of_exchangers)
            }
                
            //10
            if(coins[coinsKey].watchlist_on_coinmarketcap >value3.watchlist_on_coinmarketcap) {
                coins[coinsKey].rating += Number(value3.watchlist_on_coinmarketcap)  
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].watchlist_on_coinmarketcap)/(value6.watchlist_on_coinmarketcap*value3.watchlist_on_coinmarketcap)
            }
            //11
            if(coins[coinsKey].reddit_members >value6.reddit_members) {
                coins[coinsKey].rating += Number(value3.reddit_members)  
            }
            
            else {
                coins[coinsKey].rating +=  Number(coins[coinsKey].reddit_members)/(value6.reddit_members*value3.reddit_members)
            }

            //12
            if(coins[coinsKey].transfers >value6.transfers) {
                coins[coinsKey].rating += Number(value3.transfers)  
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].transfers)/(value6.transfers*value3.transfers)
            }

            //13
            if(coins[coinsKey].ratio_of_funds > value6.ratio_of_funds) {
                coins[coinsKey].rating += Number(value3.ratio_of_funds)  
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].ratio_of_funds)/(value6.ratio_of_funds*value3.ratio_of_funds)
            }

            //14
            if(coins[coinsKey].twitter_followers >value6.twitter_followers) {
                coins[coinsKey].rating += Number(value3.twitter_followers)
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].twitter_followers) /(value6.twitter_followers*value3.twitter_followers)
            }

            //15
            if(coins[coinsKey].gitHub_commits > value6.gitHub_commits) {
                coins[coinsKey].rating += Number(value3.gitHub_commits)
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].gitHub_commits) /(value6.gitHub_commits*value3.gitHub_commits)
            }

           //16
            if(coins[coinsKey].gitHub_stars > value6.gitHub_stars) {
                coins[coinsKey].rating += Number(value3.gitHub_stars)
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].gitHub_stars)/(value6.gitHub_stars*value3.gitHub_stars)
            }

            //17
            if(coins[coinsKey].gitHub_followers > value6.gitHub_followers) {
                coins[coinsKey].rating += Number(value3.gitHub_followers) 
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].gitHub_followers)/(value6.gitHub_followers*value3.gitHub_followers)
            }

            //18
            if(coins[coinsKey].gitHub_contributors) {
                coins[coinsKey].rating += Number(value3.gitHub_contributors)   
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].gitHub_contributors)/(value6.gitHub_contributors*value3.gitHub_contributors)
            }

            //19
            if(coins[coinsKey].marketing_site >value6.marketing_site) {
                coins[coinsKey].rating += Number(value3.marketing_site)   
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].marketing_site)/(value6.marketing_site*value3.marketing_site)
            }
            
            //20
            if(coins[coinsKey].marketing_google >value6.marketing_youtube) {
                coins[coinsKey].rating += Number(value3.marketing_google)    
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].marketing_google)/(value6.marketing_google*value3.marketing_google)
            }

            //21
            if(coins[coinsKey].marketing_youtube >value6.marketing_youtube) {
                coins[coinsKey].rating += Number(value3.marketing_google)
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey]. marketing_youtube)/(value6.marketing_youtube*value3.marketing_youtube)
            }

            //22
            if(coins[coinsKey].unnamed >value6.unnamed) {
                coins[coinsKey].rating += Number(value3.unnamed)
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey].unnamed)/(value6.unnamed*value3.unnamed)
            }

             //23
            if(coins[coinsKey]?.market_cap >value6?.market_cap) {
                coins[coinsKey].rating += Number(value3?.market_cap)
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey]?.market_cap)/(value6?.market_cap*value3?.market_cap)
            }
            // 24
            if(coins[coinsKey]?.es_capitalization >value6?.es_capitalization) {
                coins[coinsKey].rating += Number(value3?.es_capitalization)
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey]?.es_capitalization)/(value6?.es_capitalization*value3?.es_capitalization)
            }

            // 25
            if(coins[coinsKey]?.es_total_capitalization >value6?.es_total_capitalization) {
                coins[coinsKey].rating += Number(value3?.es_total_capitalization)
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey]?.es_total_capitalization)/(value6?.es_total_capitalization*value3?.es_total_capitalization)
            }

            // 26
            if(coins[coinsKey]?.ecosystem_percent >value6?.ecosystem_percent) {
                coins[coinsKey].rating += Number(value3?.ecosystem_percent)
            }
            else {
                coins[coinsKey].rating += Number(coins[coinsKey]?.ecosystem_percent)/(value6?.ecosystem_percent*value3?.ecosystem_percent)
            }

            // if(coins[coinsKey]?.total_supply >value6?.total_supply) {
            //     coins[coinsKey].rating += Number(value3?.total_supply)
            // }
            // else {
            //     coins[coinsKey].rating += Number(coins[coinsKey]?.total_supply)/(value6?.total_supply*value3?.total_supply)
            // }

            // if(coins[coinsKey]?.max_supply >value6?.max_supply) {
            //     coins[coinsKey].rating += Number(value3?.max_supply)
            // }
            // else {
            //     coins[coinsKey].rating += Number(coins[coinsKey]?.max_supply)/(value6?.max_supply*value3?.max_supply)
            // }

            // if(coins[coinsKey]?.atl_percent >value6?.atl_percent) {
            //     coins[coinsKey].rating += Number(value3?.atl_percent)
            // }
            // else {
            //     coins[coinsKey].rating += Number(coins[coinsKey]?.atl_percent)/(value6?.atl_percent*value3?.atl_percent)
            // }


            await coins[coinsKey].save()
            console.log("coins[coinsKey].name:"+ coins[coinsKey].name + "  coins[coinsKey].rating:" +coins[coinsKey].rating + "; ");
            // console.log("coins[coinsKey].save()", coins[coinsKey]);
            }catch(e){
                return console.log(e)
                console.log("bad calculatig at",   coins[coinsKey].name)
            }

        }
       // cryptoRatingService.init()
        console.log('end calc')
       }catch(e){
        console.log('error :', e)
       }

    }

    async getTop(){
        try {
            let top1=(await this.getCoinTop("ES", 0, 1)),
            top2=(await this.getCoinTop("ES", 1, 1)),
            top3=(await this.getCoinTop("ES", 2, 1)),
            top4=(await this.getCoinTop("ES", 3, 1)),
            top5=(await this.getCoinTop("ES", 4, 1))


            top1 = top1.concat(await this.getCoinTop(top1[0].name, 0, 6))
            top2 = top2.concat(await this.getCoinTop(top2[0].name, 0, 5))
            top3 = top3.concat(await this.getCoinTop(top3[0].name, 0, 2))
            top4 = top4.concat(await this.getCoinTop(top4[0].name, 0, 2))

            return [{coin: top1[0].name, price: top1[0].price, percent: 21},
                {coin: top1[1].name, price: top1[1].price, percent: 5},
                {coin: top1[2].name, price: top1[2].price, percent: 4},
                {coin: top1[3].name, price: top1[3].price, percent: 3},
                {coin: top1[4].name, price: top1[4].price, percent: 2},
                {coin: top1[5].name, price: top1[5].price, percent: 2},
                {coin: top1[6].name, price: top1[6].price, percent: 1},
                {coin: top2[0].name, price: top2[0].price, percent: 13},
                {coin: top2[1].name, price: top2[1].price, percent: 5},
                {coin: top2[2].name, price: top2[2].price, percent: 5},
                {coin: top2[3].name, price: top2[3].price, percent: 2},
                {coin: top2[4].name, price: top2[4].price, percent: 2},
                {coin: top3[0].name, price: top3[0].price, percent: 11},
                {coin: top3[2].name, price: top3[2].price, percent: 1},
                {coin: top4[0].name, price: top4[0].price, percent: 6},
            ]
        }catch (e) {
            console.log('error', e)
        }
    }

    async getCoinTop(classification, number, len){
        try{
            const Coins = await Coin.find({classification:classification}).sort({rating: -1})           
            let arr = []

            for(let i = number; i < number + len; i++){
                if(Coins.length >= number + len){
                    arr.push({name: Coins[i].name, price:Coins[i].price, classification: Coins[i].classification})
                }else{
                    arr.push ({name: "nothing",  classification: "nothing"})
                }
            }

            return arr
        }catch (e) {
            console.log(e)
        }
    }

    //helper
    groupByAndCalculateAll (array, groupKey, sumKey, parentCoin, currentCoin) {
        return array.reduce((grouped, item) => {
            const group = item[groupKey];
            if(!grouped[group]) {
              grouped[group] = {
                total: 0,
                parent:parentCoin,
                currentCoinCapitalization:currentCoin,
                items: [],
                percantage:0
              };
            }
             
            grouped[group].items.push(item);
           
        
            if(sumKey) {
              grouped[group].total += Number(item[sumKey]);
              grouped[group].percantage =  grouped[group].total/currentCoin
            }
            return grouped;
          }, {});
        
   };
    
    async getAllForksCapitalizationOfEcosystem(parentCoin, currentCoin){
        try{
            const Coins = await Coin.find()
            let arr = []
            let parentCoinObj = {}
            let groupedCoinObjects ={}
                for(let i = 0; i < Coins.length; i++){
                    arr.push({name: Coins[i]?.name, classification: Coins[i]?.classification, es_capitalization:Coins[i]?.market_cap})
                   if (parentCoin?.name ==  Coins[i]?.name) {
                        parentCoinObj ={...parentCoinObj, name: Coins[i]?.name, parentCapitalization:Number(Coins[i].market_cap)}
                       
                        break;
                   }
                }
                // console.log("parentCoinObj", parentCoinObj);
                groupedCoinObjects =this.groupByAndCalculateAll(arr, 'classification', "es_capitalization", parentCoinObj, currentCoin)
                let groupedObjectArray =Object.entries(groupedCoinObjects).map(([key, value]) => {
                    return {
                        [key]:value,
                    }
                })
                Object.entries(groupedCoinObjects).map(([key, value]) => {
                    Coins.map(async (coin) => {
                        if (coin.name == key) {
                            coin.es_capitalization = value.total
                            coin.es_total_capitalization = value.total +value.currentCoinCapitalization
                            coin.ecosystem_percent = value.percantage

                            await coin.save()
                        }
                    });
                    return {
                        [key]:value,
                    }
                })
                
                return await groupedObjectArray
        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = new calculatingService()
