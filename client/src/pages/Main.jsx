import React, { useEffect, useMemo, useRef, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import {
  useSearchCoinMutation,
  useFetchAllCoinsQuery,
} from "../redux/table/tableApiSlice";
import {setGroup, setGroups} from "../redux/groups/groupsSlice"
import {useLazyFetchAllGroupsQuery} from "../redux/groups/groupApiSlice";

import { Link, useNavigate } from "react-router-dom";

import SearchBoxItem from "../components/SearchBoxItem";
import Image from "../components/UI/Image/Image";
import PageContainer from "../components/UI/PageContainer/PageContainer";
import SearchInput from "../components/UI/Input/Input"
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch()
  const [triggerGroups, resultGroups] = useLazyFetchAllGroupsQuery()
  const navigate = useNavigate();
  const [searchCoin] = useSearchCoinMutation();
  const { data, isLoading, isSuccess } = useFetchAllCoinsQuery();

  const searchContainerRef = useRef(null);
  const searchBoxListRef = useRef(null);

  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  const [cursor, setCursor] = useState(-1);
  const [hashTags, setHashTages] = useState([]);

  
  function deleteProperties(list) {
    const copyList = JSON.parse(JSON.stringify(list))
    return copyList.map(elem => {
        let obj = elem
        delete obj._id
        delete obj.__v
        return obj
    })
}

useEffect(() => {
  const token = localStorage.getItem('token')
  const fetchData = async () => {
       triggerGroups()
  }

  fetchData()
}, [])


  useEffect(() => {
    if (resultGroups.isSuccess) {
        // console.log("resultGroups.data in main", resultGroups.data);
        dispatch(setGroups(deleteProperties(resultGroups.data)))
    }
}, [resultGroups])

  useEffect(() => {
    window.addEventListener("mousedown", clickOutSideHandler);
  }, []);
  useEffect(() => {
    if (data != undefined && data.length > 0) {
      setHashTages(data.slice(0, 18));
    }
  }, [data]);

  const filteredCoins = useMemo(() => {
    if (!search) {
      return resultSearch;
    }
    return resultSearch.filter((searchResult) =>
      searchResult.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [resultSearch, search]);

  const handleSearch = async (text) => {
    setSearch(text);

    if (text.length > 0) {
      const res = await searchCoin({ text });
      setResultSearch(res.data.coins);
    } else {
      setResultSearch([]);
    }
  };

  const onChange = async (e) => {
    setSearch(e.target.value);
    await debouncedSearch(e.target.value);
  };
  const debouncedSearch = useDebounce(handleSearch, 0);

  const clickOutSideHandler = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setSearch("");
    }
  };
  const onPressArrowkey = (event) => {
    if (event.key == "ArrowDown") {
      if (search != "") {
        setCursor((currentPosition) =>
          currentPosition < filteredCoins.length - 1
            ? currentPosition + 1
            : currentPosition - 1
        );
      }
    }
    if (event.key == "ArrowUp") {
      setCursor((currentPosition) =>
        currentPosition > 0 ? currentPosition - 1 : 0
      );
    }
    if (event.key == "Escape") {
      setSearch("");
      setCursor(-1);
    }
    if (event.key == "Enter") {
      // setSearch(filteredCoins[cursor].name)
      navigate(`/project/${filteredCoins[cursor].name}`);
    }
  };

  return (
    <>
    <PageContainer
        pageName={"page"}
        sectionName={"page__main-title main-title container"}
      >
        <div className="main-title__block">
            <Image
                type={"image/webp"}
                srcImage={require("../assets/img/cryptoon.png")}
                srcWidth={"315px"}
            />
            <span>i</span>
        </div>

          <div
            className={`main-title__search search ${
              search.length ? "dropdown-open" : null
            }`}
            ref={searchContainerRef}
          >
            <SearchInput
              value={search}
              onChange={onChange}
              type="text"
              name="search"
              className="search__input"
              placeholder={"Enter favorite cryptocurrency"}
              onKeyDown={(e) => onPressArrowkey(e)}
            />
            <div className="search__placeholder">
              <Image
                srcSet={require("../assets/img/lupa.webp")}
                type={"image/webp"}
                srcImage={require("../assets/img/lupa.png")}
              />
            </div>
            <div
              style={{
                display: search.length ? "block" : "none",
                maxHeight: filteredCoins.length > 4 ? "200px" : null,
                overflowY: filteredCoins.length > 4 ? "scroll" : null,
              }}
              className="main-title_search-dropdown"
            >
              {filteredCoins.map((coin, index) => (
                <SearchBoxItem
                  key={coin.name}
                  onSelect={() => {
                    navigate(`/project/${coin.name}`);
                    setSearch(coin.name);
                  }}
                  isHighlighted={cursor == index ? true : false}
                  searchCoin={coin}
                  showName={true}
                  searchBoxStyles={false}
                />
              ))}
            </div>
          </div>

          <div className="page__hachtag hachtag" ref={searchBoxListRef}>
            <nav className="hachtag__nav nav-hachtag">
              <ul className="nav-hachtag__list">
                {hashTags.map((ht) => (
                  <li className="nav-hachtag__list-item" key={ht.name}>
                    <Link to={`/project/${ht.name}`}>#{ht.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
      </PageContainer>
    </>
  );
};

export default Main;
