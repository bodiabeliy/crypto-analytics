const RenamingCoinTooltipsDictionary = (originalField) => {
    switch (originalField) {
        case "classification":
            return "Type";
        case "class":
            return "Asset type";
        case "type":
            return "Asset class";
        case "subtype":
            return "Type of asset";
        case "proof_consensus":
            return "Basic emission consensus";
        case "percentage_of_the_market":
            return "Proportion of total market capitalization";
        case "total_supply":
            return "The number of units of the asset is available in the market";
        case "max_supply":
            return "Number of units at 100% emission";
        case "percent__out_of_supply":
            return "Proportion of assets that will still be issued";
        case "market_cap":
            return "Asset capitalization in current prices";
        case "max_cap":
            return "The maximum capitalization of the asset when issuing all tokens at current market prices";
        case "ath_price":
            return "The ratio of price to ATL, the number of maximum possible Xs at the current price";
        case "ath_percent":
            return "Historically the highest price";
        case "ath_time":
            return "The date of the historical maximum price";
        case "atl_price":
            return "Historically lowest price";
        case "atl_percent":
            return "The percentage that remained before the historical minimum price";
        case "atl_time":
            return "Date of historical minimum price";

        case "average_price":
            return "Average price paid by investors";
        case "total_involved":
            return "The involved amount of investment in the project";
        case "wallets":
            return "Proportion of the available issue on the wallets of the five largest holders";
        case "site_with_wallets":
            return "wallet site";
        case "wallet1":
            return "Proportion of the available issue on the wallet of the first largest holder";
        case "wallet2":
            return "Proportion of the available issue on the wallet of the second largest holder";
        case "wallet3":
            return "Proportion of the available issue on the wallet of the third largest holder";
        case "wallet4":
            return "Proportion of the available issue on the wallet of the fouth largest holder";
        case "wallet5":
            return "Proportion of the available issue on the wallet of the fifth largest holder";
        case "holders":
            return "The total number of asset holders";
        case "transfers":
            return "Volume of monthly asset transfer";
        case "number_of_funds_invested":
            return "The number of funds that invested in the project";
        case "ratio_of_funds":
            return "Internal rating of funds that invested in the project";
        case "number_of_exchangers":
            return "The number of exchanges on which the asset is available";
        case "reddit_members":
            return "Reddit Members";
        case "twitter_followers":
            return "Twitter Followers";
        case "gitHub_commits":
            return "GitHub Commits";
        case "gitHub_stars":
            return "GitHub Stars";
        case "gitHub_followers":
            return "GitHub Followers";
        case "gitHub_contributors":
            return "GitHub Contributors";
        case "watchlist_on_coinmarketcap":
            return "The number of subscribers who added an asset to the watch list";
        case "marketing_google":
            return "Google marketing";
        case "marketing_youtube":
            return "Youtube marketing";
            break;
    }
};

export default RenamingCoinTooltipsDictionary;
