import React, {useMemo} from "react"

const SearchBoxItem = ({searchCoin, onSelect, isHighlighted, showName, searchBoxStyles}) => {


    return (
        <div 
            className={`main-title_search-dropdown_option ${isHighlighted ?"dropdown--highlighed" :null}`} 
            key={searchCoin._id} onClick={onSelect}
            style={{display:searchBoxStyles == true ?"flex":"block"}}
            
            >
            
            <img src={searchCoin.img} alt="" className={ searchBoxStyles == true ?"main-title_search-dropdown_option_icon--iniled":"main-title_search-dropdown_option_icon"} />
           {showName == true && 
              <>
              {searchBoxStyles ==true ?
               <h2 className="project__title">
               {searchCoin.name}
             </h2>
              :
              <span className="main-title_search-dropdown_option_crypto-project-ticker">{searchCoin.name}</span>
              }
                {/* <span
                className="main-title_search-dropdown_option_crypto-project-name">{searchCoin.full_name}</span> */}
           
              </>
           }
        </div>
    );
}

export default SearchBoxItem;