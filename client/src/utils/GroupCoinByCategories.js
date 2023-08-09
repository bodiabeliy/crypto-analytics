const  GroupCoinByCategories = (originalArray) => {
  const priorityList = [
    "classification",
    "class",
    "type",
    "subtype",
    "proof_consensus",
    //
    "percentage_of_the_market",
    "total_supply",
    "max_supply",
    "percent__out_of_supply",
    "market_cap",
    "max_cap",
    //
    "ath_price",
    "ath_percent",
    "ath_time",
    "atl_price",
    "atl_percent",
    "atl_time",
    //
    "average_price",
    "total_involved",
    //
    "wallets",
    "site_with_wallets",
    "wallet1",
    "wallet2",
    "wallet3",
    "wallet4",
    "wallet5",
    "holders",
    "transfers",
    //
    "number_of_funds_invested",
    "ratio_of_funds",
    "number_of_exchangers",
    //insert developers group

    //
    "reddit_members",
    "twitter_followers",
    "twitter_index",
    "site_with_wallets",
    "gitHub_commits",
    "gitHub_stars",
    "gitHub_followers",
    "gitHub_contributors",
    //
    "watchlist_on_coinmarketcap",
    "marketing_google",
    "marketing_youtube",
    "marketing_site",
    "ico_sec",

    //
    "ecosystem_percent"

  ]


  function customSort(a, b) {
    const indexA = priorityList.indexOf(a);
    const indexB = priorityList.indexOf(b);
  
    if (indexA === -1 && indexB === -1) {
      return 0; // If both elements are not in the priority list, maintain their original order
    } else if (indexA === -1) {
      return 1; // Move elements not in the priority list to the end
    } else if (indexB === -1) {
      return -1; // Move elements not in the priority list to the end
    } else {
      return indexA - indexB; // Sort based on the index in the priority list
    }
  }
  originalArray.sort(customSort);
  
    const classificationItems = originalArray.slice(0, 5);
    const capitalizationItems = originalArray.slice(5, 11);
    const priceItems = originalArray.slice(11, 17);
    const InvestItems = originalArray.slice(17, 19);
    const holdersItems = originalArray.slice(19, 28);
    const fundItems = originalArray.slice(28, 31);
    const mediaItems = originalArray.slice(31, 38);
    const marketingItems = originalArray.slice(38, 44);



  



    const groupedArray = [
      { category: classificationItems[0], items: classificationItems },
      { category: capitalizationItems[0], items: capitalizationItems },
      { category: priceItems[0], items: priceItems },
      { category: InvestItems[0], items: InvestItems },
      { category: holdersItems[0], items: holdersItems },
      { category: fundItems[0], items: fundItems },
      { category: mediaItems[0], items: mediaItems },
      { category: marketingItems[0], items: marketingItems },
    ];
    const groupByCategory = groupedArray.reduce((group, item) => {
      const { category } = item;
      group[category] = group[category] ?? [];
      group[category].push(item);

      let groupCoinArrayByCategory =[]
      groupCoinArrayByCategory =[...groupCoinArrayByCategory, group]
      return Object.values(groupCoinArrayByCategory[0]);
    }, []);

   
    console.log("groupByCategory", groupByCategory);
    return groupByCategory;
}
export default GroupCoinByCategories
