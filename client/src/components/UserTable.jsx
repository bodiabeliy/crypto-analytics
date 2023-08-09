
import React, { useCallback, useEffect, useState } from "react";
import RatingButton from "../components/UI/Button/Button"

const UserTable = ({coinsRaitingList}) => {
    const [visibleCount, setVisibleCount] = useState(10);
    const [sortedRaitingList, setSortedRaitingList] = useState([])
    
    useEffect(() => {
      setSortedRaitingList(coinsRaitingList)
    }, [])

    const handleShowMore = () => {
      setVisibleCount((prevCount) => prevCount + 10);
    };
  
    const handleShowLess = () => {
      setVisibleCount((prevCount) => Math.max(prevCount - 10, 10));
    };

    const sortAscending = useCallback(() => {
      setSortedRaitingList([...coinsRaitingList].sort((a, b) => a.rating - b.rating));
    }, []);
  
    const sortDescending = useCallback(() => {
      setSortedRaitingList([...coinsRaitingList].sort((a, b) => b.rating - a.rating));

      setVisibleCount((prevCount) => prevCount + 30);

    }, [visibleCount]);

   

  return (
    <>
    <div className="table__wrapper">
      
        <h1 className="table__header-title table-title">Rating of projects</h1>
        <div className="table__grid-result table__grid-row_title table_grid-flex">
          <div className="grid__item  grid__item-value">Tiker</div>
          <div className="grid__item  grid__item-value table_grid-flex">
          <div className="grid__item__sortbtns">
          Rating
            <RatingButton className="sort-up" onClick={sortAscending}>↑</RatingButton>
            <RatingButton className="sort-down"  onClick={sortDescending}>↓</RatingButton>
          </div>
          </div>
        </div>
        <div className="raiting__table">
        {sortedRaitingList?.slice(0, visibleCount).sort().map((elem) => (
          <div key={elem.name} className="table__grid-result table_grid-flex">
            {
               
               (
                   <>
                  <div className="grid__item grid__item-value">{elem?.name}</div>
                  <div className="grid__item grid__item-value" style={{color:elem.rating <30?"red":elem?.rating>11 && elem?.rating<50?"orange":"green"}}>{elem.rating?.toFixed(2)}%</div>
                  </>
              )
            }
          </div>
          
        ))}
        </div>
      </div>
      {visibleCount < coinsRaitingList.length ? (
        <div className="table__paginations-btns"> 
          <RatingButton onClick={handleShowMore} className="table__button btn">
            Show more
          </RatingButton>
          {visibleCount > 10 && (
            <RatingButton onClick={handleShowLess} className="table__button btn">
              Show less
            </RatingButton>
          )}
        </div>
      ) : (
        <RatingButton onClick={handleShowLess} className="table__button btn">
          Show less
        </RatingButton>
      )}
    </>
      
  );
};

export default UserTable;
