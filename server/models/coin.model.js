const db= require('../db/db')

const schema = new db.Schema({
    name:{
        type: String,
        default:""
    },
    img:{
        type: String,
        default: ""
    },
    price: {
        type: Number | NaN,
        default: 0
    },
    ath_price: {
        type: Number,
        default: 0
    },
    ath_time: {
        type: String,
        default: ""
    },
    atl_price: {
        type: Number,
        default: 0
    },
    atl_time: {
        type: String,
        default: ""
    },
    full_name:{
      type: String,
        default: ""
    },
    market_cap: {
        type: Number,
        default: 0
    },
    total_supply:{
        type: Number | NaN,
        default: 0
    },
    search_group: {
        type: Number,
        default: 0
    },
    id: {
        type: Number,
        default: 0
    },
    classification: {
        type: String,
        default: ""
    },
    class: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: ""
    },
    subtype: {
        type: String,
        default: ""
    },
    proof_consensus: {
        type: String,
        default: ""
    },
    expected_rise_to_decline: {
        type: Number,
        default: 0
    },
    expected_1_5_years: {
        type: Number,
        default: 0
    },
    possible_passage: {
        type: Number,
        default: 0
    },
    floor1: {
        type: Number,
        default: 0
    },
    near_good_price: {
        type: Number,
        default: 0
    },
    percent_of_good_price: {
        type: Number,
        default: 0
    },
    ceiling1: {
        type: Number,
        default: 0
    },
    ceiling2: {
        type: Number,
        default: 0
    },
    percent_90_ath: {
        type: Number,
        default: 0
    },
    percent_93_ath: {
        type: Number,
        default: 0
    },
    percent_95_ath: {
        type: Number,
        default: 0
    },
    percentage_of_the_market: {
        type: Number,
        default: 0
    },
    ath_percent: {
        type: Number,
        default: 0
    },
    x_history: {
        type: Number,
        default: 0
    },
    atl_percent: {
        type: Number,
        default: 0
    },
    max_supply: {
        type: Number,
        default: 0
    },
    max_cap: {
        type: Number,
        default: 0
    },
    percent__out_of_supply: {
        type: Number,
        default: 0
    },
    x_on_token_sales: {
        type: Number,
        default: 0
    },
    price_pre_seed: {
        type: Number,
        default: 0
    },
    amount_pre_seed: {
        type: Number,
        default: 0
    },
    price_seed: {
        type: Number,
        default: 0
    },
    amount_seed: {
        type: Number,
        default: 0
    },
    price_private_round: {
        type: Number,
        default: 0
    },
    amount_private_round: {
        type: Number,
        default: 0
    },
    price_early_supporters: {
        type: Number,
        default: 0
    },
    amount_early_supporters: {
        type: Number,
        default: 0
    },
    price_ico_public: {
        type: Number,
        default: 0
    },
    amount_ico_public: {
        type: Number,
        default: 0
    },
    price_ieo: {
        type: Number,
        default: 0
    },
    amount_ieo: {
        type: Number,
        default: 0
    },
    price_ido: {
        type: Number,
        default: 0
    },
    amount_ido: {
        type: Number,
        default: 0
    },
    aver_price: {
        type: Number,
        default: 0
    },
    average_price: {
        type: Number,
        default: 0
    },
    total_involved: {
        type: Number,
        default: 0
    },
    percent_emission: {
        type: Number,
        default: 0
    },
    percent_emission_by_algorithm: {
        type: Number,
        default: 0
    },
    difference_between_emission: {
        type: Number,
        default: 0
    },
    emission_max_rate: {
        type: Number,
        default: 0
    },
    emission: {
        type: Number,
        default: 0
    },
    emission_price_after_with_inflation: {
        type: Number,
        default: 0
    },
    emission_inflation: {
        type: Number,
        default: 0
    },
    emission_inflation_token_day: {
        type: Number |NaN,
        default: 0
    },
    emission_inflation_token_week: {
        type: Number,
        default: 0
    },
    emission_inflation_token_month: {
        type: Number,
        default: 0
    },
    true: {
        type: Number,
        default: 0
    },
    wallets: {
        type: Number,
        default: 0
    },
    site_with_wallets: {
        type: String,
        default: ""
    },
    wallet1: {
        type: Number,
        default: 0
    },
    wallet2: {
        type: Number,
        default: 0
    },
    wallet3: {
        type: Number,
        default: 0
    },
    wallet4: {
        type: Number,
        default: 0
    },
    wallet5: {
        type: Number,
        default: 0
    },
    holders: {
        type: Number,
        default: 0
    },
    transfers: {
        type: Number,
        default: 0
    },
    number_of_funds_invested: {
        type: Number,
        default: 0
    },
    have_own_fund: {
        type: Number,
        default: 0
    },
    ratio_of_funds: {
        type: Number,
        default: 0
    },
    number_of_exchangers: {
        type: Number,
        default: 0
    },
    is_on_coinbase_and_kraken: {
        type: Number,
        default: 0
    },
    watchlist_on_coinmarketcap: {
        type: Number,
        default: 0
    },
    largest_price_of_the_mining: {
        type: Number,
        default: 0
    },
    reddit_members: {
        type: Number,
        default: 0
    },
    twitter_followers: {
        type: Number,
        default: 0
    },
    gitHub_commits: {
        type: Number,
        default: 0
    },
    gitHub_stars: {
        type: Number,
        default: 0
    },
    gitHub_followers: {
        type: Number,
        default: 0
    },
    gitHub_contributors: {
        type: Number,
        default: 0
    },
    marketing_site: {
        type: Number,
        default: 0
    },
    marketing_google: {
        type: Number,
        default: 0
    },
    marketing_youtube: {
        type: Number,
        default: 0
    },
    unnamed: {
        type: Number,
        default: 0
    },
    rating:{
        type: Number,
        default: 0
    }

})

module.exports = db.model('Coin', schema)
