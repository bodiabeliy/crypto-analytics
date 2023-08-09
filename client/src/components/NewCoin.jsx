import React, {useState} from 'react';
import {Button, Stack, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {addNewCoin} from "../redux/table/tableSlice";
import {useSaveCoinMutation} from "../redux/table/tableApiSlice";

const initialCoinData = {
    search_group: 0,
    name: "",
    classification: "",
    class: "",
    type: "",
    subtype:"",
    proof_consensus: "",
    expected_rise_to_decline: 0,
    expected_1_5_years: 0,
    possible_passage: 0,
    floor1: 0,
    near_good_price: 0,
    percent_of_good_price: 0,
    ceiling1: 0,
    ceiling2: 0,
    percent_90_ath: 0,
    percent_93_ath: 0,
    percent_95_ath: 0,
    price: "",
    price_ico_public:0,
    amount_ico_public:0,
    percentage_of_the_market: 0,
    ath_percent: 0,
    ath_price: "",
    ath_time: "",
    x_history: 0,
    atl_percent: 0,
    atl_price: "",
    atl_time: "",
    max_supply: 0,
    max_cap:0,
    percent_out_of_supply: 0,
    total_supply: 0,
    market_cap: "",
    x_on_token_sales: 0,
    price_seed: 0,
    amount_seed: 0,
    price_early_supporters: 0,
    amount_early_supporters: 0,
    price_ieo: 0,
    amount_ieo: 0,
    average_price: 0,
    total_involved: 0,
    percent_emission: 0,
    percent_emission_by_algorithm:0,
    difference_between_emission: 0,
    emission_max_rate: 0,
    emission: 0,
    emission_price_after_with_inflation: 0,
    emission_inflation: 0,
    wallets: 0,
    site_with_wallets: "",
    wallet1: 0,
    wallet2: 0,
    wallet3: 0,
    wallet4: 0,
    wallet5: 0,
    holders: 0,
    transfers: 0,
    number_of_funds_invested: 0,
    ratio_of_funds: 0,
    number_of_exchangers: 0,
    watchlist_on_coinmarketcap: 0,
    reddit_members: 0,
    twitter_followers: 0,
    unnamed: 0,
    gitHub_commits: 0,
    gitHub_stars: 0,
    gitHub_followers: 0,
    gitHub_contributors: 0,
    marketing_site: 0,
    marketing_google: 0,
    marketing_youtube: 0,
    full_name: "",
    img: "",
    rating: 0
}
const NewCoin = ({handleCloseDialog}) => {
    const [newCoinData, setNewCoinData] = useState(initialCoinData)
    const dispatch = useDispatch()
    const [saveCoin] = useSaveCoinMutation()
    const handleChange = (key,value)=>{
        setNewCoinData(prev => {
            const coin = {...prev}
            coin[key] = value
            return coin
        })
    }
    const handleAdd = async ()=>{
         if(!!newCoinData.name.length){
             dispatch(addNewCoin(newCoinData))
             await saveCoin(newCoinData)
             handleCloseDialog()
             setNewCoinData(initialCoinData)
         }
     }
    return (
        <Stack padding={2} bgcolor='#fff' borderRadius={2} alignItems={'center'}>
            <Typography fontSize={22}>Adding new coin</Typography>
            <Typography fontSize={14} color={'grey'} marginBottom={1}>*required field</Typography>
            <Stack display='flex' flexDirection='row' gap={1} overflow={'scroll'} maxWidth={'85vw'} height='100px' alignItems={'center'}>
                {
                    
                    Object.keys(newCoinData).map((key) => (
                        key === "name" ? (
                          <div>
                          <TextField
                            sx={{ minWidth: '150px' }}
                            label={key}
                            key={key}
                            value={newCoinData[key]}
                            onChange={(e) => handleChange(key, e.target.value)}
                          />
                          </div>
                        ) : null
                      ))                    
                }
            </Stack>
            <Button sx={{width:'30%', marginTop:1}} variant={'contained'} onClick={handleAdd}>Add</Button>

        </Stack>
    )
}

export default NewCoin;