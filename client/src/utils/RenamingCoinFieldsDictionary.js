const RenamingCoinFieldsDictionary = (originalField) => {
    switch (originalField) {
        case "classification":
            return "Type";
        case "class":
            return "Class";
        case "type":
            return "Species";
        case "subtype":
            return "Type of asset";
        case "proof_consensus":
            return "Proof Consensus";
        case "percentage_of_the_market":
            return "Market domanation, %";
        case "total_supply":
            return "Market Suplly";
        case "max_supply":
            return "Max Supply";
        case "percent__out_of_supply":
            return "% to Max Supply";
        case "market_cap":
            return "Market Cap, USD";
        case "max_cap":
            return "Max Cap, USD";
        case "ath_price":
            return "Price/ATH";
        case "ath_percent":
            return "% ATH";
        case "ath_time":
            return "ATH Date";
        case "atl_price":
            return "Price/ATL";
        case "atl_percent":
            return "% ATL";
        case "atl_time":
            return "ATH Date";

        case "average_price":
            return "Investor Price, USD";
        case "total_involved":
            return "Investments, USD";
        case "wallets":
            return "1-5 wallets %";
        case "site_with_wallets":
            return "wallet site";
        case "wallet1":
            return "1 wallet, %";
        case "wallet2":
            return "2 wallet %";
        case "wallet3":
            return "3 wallet %";
        case "wallet4":
            return "4 wallet %";
        case "wallet5":
            return "5 wallet %";
        case "holders":
            return "Holders";
        case "transfers":
            return "Transfers";
        case "number_of_funds_invested":
            return "Funds&Investors";
        case "ratio_of_funds":
            return "Funds rate";
        case "number_of_exchangers":
            return "Number of CEX";
        case "reddit_members":
            return "Reddit Members";
        case "twitter_followers":
            return "Twitter Followers";
        case "twitter_index":
            return "Twitter Rating";
        case "gitHub_commits":
            return "GitHub Commits";
        case "gitHub_stars":
            return "GitHub Stars";
        case "gitHub_followers":
            return "GitHub Followers";
        case "gitHub_contributors":
            return "GitHub Contributors";
        case "watchlist_on_coinmarketcap":
            return "Watch list total";
        case "marketing_google":
            return "Google marketing";
        case "marketing_youtube":
            return "Youtube marketing";
        case "ico_sec":
            return "ico sec alert";
        case "marketing_youtube":
            return "Youtube marketing";
        case "marketing_site":
            return "Site visible";
            break;
    }
};

export default RenamingCoinFieldsDictionary;
