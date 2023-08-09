const RenamingCoinParentGroupFieldsDictionary = (originalField) => {
    switch (originalField) {
        case "CLASSIFICATION":
            return "CLASSIFICATION";
        case "PERCENTAGE OF THE MARKET":
            return "CAPITALIZATION";
        case "ATH PRICE":
            return "PRICE HISTORY";
        case "AVERAGE PRICE":
            return "INVESTMENTS";
        case "WALLETS":
            return "HOLDRES";
        case "NUMBER OF FUNDS INVESTED":
            return "FUNDS AND EXCHANGERS";
        case "REDDIT MEMBERS":
            return "SOCIAL MEDIA";
        case "WATCHLIST ON COINMARKETCAP":
            return "MARKETING";
        
            break;
    }
};

export default RenamingCoinParentGroupFieldsDictionary;
