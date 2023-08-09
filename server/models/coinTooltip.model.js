const db= require('../db/db')

const schema = new db.Schema({
    name:{
        type: String,
    },
    img:{
        type:String,
    },
    price: {
        type: String,
    },
    ath_price: {
        type: String,
    },
    ath_time: {
        type: String,
    },
    atl_price: {
        type: String,
    },
    atl_time: {
        type: String,
    },
    full_name:{
      type:String,
    },
    market_cap: {
        type: String,
    },
    total_supply:{
        type:String,
    },
    search_group: {
        type: String,
    },
    id: {
        type: String,
    },
    classification: {
        type: String,
    },
    class: {
        type: String,
    },
    type: {
        type: String,
    },
    subtype: {
        type: String,
    },
    proof_consensus: {
        type: String,
    },
    expected_rise_to_decline: {
        type: String,
    },
    expected_1_5_years: {
        type: String,
    },
    possible_passage: {
        type: String,
    },
    floor1: {
        type: String,
    },
    near_good_price: {
        type: String,
    },
    percent_of_good_price: {
        type: String,
    },
    ceiling1: {
        type: String,
    },
    ceiling2: {
        type: String,
    },
    percent_90_ath: {
        type: String,
    },
    percent_93_ath: {
        type: String,
    },
    percent_95_ath: {
        type: String,
    },
    percentage_of_the_market: {
        type: String,
    },
    ath_percent: {
        type: String,
    },
    x_history: {
        type: String,
    },
    atl_percent: {
        type: String,
    },
    max_supply: {
        type: String,
    },
    max_cap: {
        type: String,
    },
    percent__out_of_supply: {
        type: String,
    },
    x_on_token_sales: {
        type: String,
    },
    price_pre_seed: {
        type: String,
    },
    amount_pre_seed: {
        type: String,
    },
    price_seed: {
        type: String,
    },
    amount_seed: {
        type: String,
    },
    price_private_round: {
        type: String,
    },
    amount_private_round: {
        type: String,
    },
    price_early_supporters: {
        type: String,
    },
    amount_early_supporters: {
        type: String,
    },
    price_ico_public: {
        type: String,
    },
    amount_ico_public: {
        type: String,
    },
    price_ieo: {
        type: String,
    },
    amount_ieo: {
        type: String,
    },
    price_ido: {
        type: String,
    },
    amount_ido: {
        type: String,
    },
    aver_price: {
        type: String,
    },
    average_price: {
        type: String,
    },
    total_involved: {
        type: String,
    },
    percent_emission: {
        type: String,
    },
    percent_emission_by_algorithm: {
        type: String,
    },
    difference_between_emission: {
        type: String,
    },
    emission_max_rate: {
        type: String,
    },
    emission: {
        type: String,
    },
    emission_price_after_with_inflation: {
        type: String,
    },
    emission_inflation: {
        type: String,
    },
    emission_inflation_token_day: {
        type: String,
    },
    emission_inflation_token_week: {
        type: String,
    },
    emission_inflation_token_month: {
        type: String,
    },
    true: {
        type: Boolean,
    },
    wallets: {
        type: String,
    },
    site_with_wallets: {
        type: String,
    },
    wallet1: {
        type: String,
    },
    wallet2: {
        type: String,
    },
    wallet3: {
        type: String,
    },
    wallet4: {
        type: String,
    },
    wallet5: {
        type: String,
    },
    holders: {
        type: String,
    },
    transfers: {
        type: String,
    },
    number_of_funds_invested: {
        type: String,
    },
    have_own_fund: {
        type: Boolean,
    },
    ratio_of_funds: {
        type: String,
    },
    number_of_exchangers: {
        type: String,
    },
    is_on_coinbase_and_kraken: {
        type: Boolean,
    },
    largest_price_of_the_mining: {
        type: String,
    },
    watchlist_on_coinmarketcap: {
        type: String,
    },
    reddit_members: {
        type: String,
    },
    twitter_followers: {
        type: String,
    },
    twitter_index:{
        type: String,
    },
    // gitHub_commits: {
    //     type: Boolean,
    // },
    gitHub_stars: {
        type: String,
    },
    gitHub_followers: {
        type: String,
    },
    gitHub_contributors: {
        type: String,
    },
    marketing_site: {
        type: String,
    },
    watchlist_on_coinmarketcap: {
        type: String,
    },
    marketing_google: {
        type: String,
    },
    marketing_youtube: {
        type: String,
    },
    ico_sec: {
        type:Number
    },
    cryptoon_dao_rate: {
        type:Number
    },
    general_dao_rate: {
        type:Number
    },
    es_capitalization: {
        type:String,
    },
    es_total_capitalization: {
        type:String,
    },
    ecosystem_percent: {
        type:String
    }
})

module.exports = db.model('CoinTooltip', schema)
