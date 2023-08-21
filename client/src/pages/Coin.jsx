import React, { useEffect, useState } from "react";
import {selectCurrentGroup, setGroup} from "../redux/groups/groupsSlice"
import {useFetchClientCoinGroupedCategoriesQuery} from "../redux/groups/groupApiSlice";
import { useLocation } from "react-router";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";

import {
  useCoinDirectionQuery,
  useCoinLimitQuery,
  useCoinTooltipQuery,
  useFetchAllCoinsQuery,
  useProjectBlureFilterQuery,
  useProjectVisibleFilterQuery,
} from "../redux/table/tableApiSlice";
import CoinInfo from "../components/CoinInfo";
import Image from "../components/UI/Image/Image";
import PageContainer from "../components/UI/PageContainer/PageContainer";
import GenerateWalletButton from "../components/UI/Button/Button"
import { useDispatch, useSelector } from "react-redux";

import GroupCoinByCategories from "../utils/GroupCoinByCategories"
import RenamingCoinParentGroupFieldsDictionary from "../utils/RenamingCoinParentGroupFieldsDictionary"
import SearchBoxItem from "../components/SearchBoxItem";

const notShow = ["id", "img", "full_name", "name"];
const Coin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const coinFieldsGroup = useSelector(selectCurrentGroup)
  const name = location.pathname.split("/").slice(-1)[0];
  const [coin, setCoin] = useState({});
  const [groupedCoinFields, setGroupedCoinFields] = useState([])
  const [notFound, setNotFound] = useState(false);
  const { data, isLoading, isSuccess } = useFetchAllCoinsQuery();
  const {currentData} = useFetchClientCoinGroupedCategoriesQuery()

  console.log("name", name);
  const {
    data: coinLimit,
    isLoading: cll,
    isSuccess: cls,
  } = useCoinLimitQuery();
  const {
    data: coinDirection,
    isLoading: cdl,
    isSuccess: cds,
  } = useCoinDirectionQuery();
  const {
    data: vis,
    isSuccess: vss,
    isLoading: vsl,
  } = useProjectVisibleFilterQuery();
  const {
    data: blr,
    isSuccess: bls,
    isLoading: bll,
  } = useProjectBlureFilterQuery();
  const { data: ctt, isSuccess: cts, isLoading: ctl } = useCoinTooltipQuery();
  const isLogined = !!localStorage.getItem("token");
  const [sortedFields, setSortedFields] = useState([]);

  console.log("groupedCoinFields", groupedCoinFields);
  useEffect(() => {
    dispatch(setGroup({groupName: "classification"}))

  }, [coinFieldsGroup,])


  useEffect(() => {
    if (bls && coinFieldsGroup) {
      const blured = [];
      const unblured = [];
      Object.keys(coinFieldsGroup).forEach((elem) => {
        if (elem !== "_id" && elem !== "__v") {
          if (!blr[elem]) unblured.push(elem);
          else blured.push(elem);
        }
      });
      setSortedFields([...unblured, ...blured]);
      // dispatch(setGroup({groupName: "classification"}))
    }
  }, [blr]);

  useEffect(() => {
    if (isSuccess) {
      let types = [];
      setCoin(data.filter((coin) => coin.name === name.toUpperCase())[0]);
      data.forEach((coin) => {
        if (!types.includes(coin.type)) types.push(coin.type);
      });
      //setNotFound(!!data.filter(coin => coin.name === name.toUpperCase())[0])
      setNotFound(
        !data.filter((coin) => coin.name === name.toUpperCase()).length
      );
    }
  }, [data]);


  const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {})
  };


  useEffect(() => {
    // Call the grouping function
    if (sortedFields.length>0) {
      setGroupedCoinFields(GroupCoinByCategories(sortedFields))
      groupBy(sortedFields)
    }
  }, [sortedFields]);




  if (
    !isSuccess ||
    isLoading ||
    !cls ||
    cll ||
    !cds ||
    cdl ||
    !vss ||
    vsl ||
    !bls ||
    bll ||
    !cts ||
    ctl ||
    !sortedFields.length ||
    ! coinFieldsGroup ||
    !coin.name
  )
    return (
      <Loader title={"Loading..."}/>
    );

  if (notFound)
    return (
      <Loader title={"Not Found..."}/>
    );

  return (
    <>
      <PageContainer
        pageName={"page"}
        sectionName={"page__project project container"}
      >
        <div className="projectDetailize">
          <div className="project__main">
            <div className="project__price price__text--mobile">
              <div className="rate__text">Price:</div>
              <span className="price__nums">{Number(coin.price).toFixed(2)} $</span>
            </div>
            <SearchBoxItem
                  key={coin.name}
                  searchCoin={coin}
                  showName={true}
                  searchBoxStyles={true}
                  
            />
            <div className="project__rate rate">
              <Image
                srcSet={require("../assets/img/star.webp")}
                type={"image/webp"}
                srcImage={require("../assets/img/star.png")}
              />
              <div className="rate__text">Raiting:</div>
              <Link
                to={isLogined == true ? "/rating" : null}
                className="rate__nums"
              >
                {coin.rating?.toFixed(2)}
                /100
              </Link>
            </div>
          </div>
          <div className="page__table table container">
            <div className="table__wrapper">
              <div className="table__grid grid no-payed">
              {groupedCoinFields?.map(groupedCoinField => {
                if (notShow.includes(groupedCoinField[0].category)) return null;
                let fieldName = "";
                fieldName = RenamingCoinParentGroupFieldsDictionary(groupedCoinField[0].category?.toUpperCase().replaceAll("_", " "))
                return vis[groupedCoinField[0].category] ? (
                  <CoinInfo
                    key={groupedCoinField[0].category}
                    isBlured={blr[groupedCoinField[0].category]}
                    name={fieldName}
                    parentGroup={coin[groupedCoinField[0].category]}
                    coinDetailize={coin}
                    limits={{
                      min: coinLimit[1][groupedCoinField[0]?.category],
                      max: coinLimit[0][groupedCoinField[0]?.category],
                    }}
                    reverse={coinDirection[groupedCoinField[0]?.category]}
                    desc={ctt[groupedCoinField[0]?.category]}
                    groupedCoinFields={groupedCoinField[0]?.items}
                    visible={vis}
                    blurable={blr}
                  />
                ) : null;
                })}
                {/* {groupedCoinFields?.map(groupedCoinField => {

                  if (notShow.includes(groupedCoinField[0].category)) return null;
                  let fieldName = "";
                 fieldName = RenamingCoinParentGroupFieldsDictionary(groupedCoinField[0].category.toUpperCase().replaceAll("_", " "))
                  return vis[groupedCoinField[0].category] ? (
                    <CoinInfo
                      key={groupedCoinField[0].category}
                      isBlured={blr[groupedCoinField[0].category]}
                      name={fieldName}
                      parentGroup={coin[groupedCoinField[0].category]}
                      coinDetailize={coin}
                      limits={{
                        min: coinLimit[1][groupedCoinField[0].category],
                        max: coinLimit[0][groupedCoinField[0].category],
                      }}
                      reverse={coinDirection[groupedCoinField[0].category]}
                      desc={ctt[groupedCoinField[0].category]}
                      groupedCoinFields={groupedCoinField[0].items}
                      visible={vis}
                    />
                  ) : null;
                })} */}
                
              </div>
            </div>
            <GenerateWalletButton
              onClick={() => navigate("/result/" + Date.now())}
              type="button"
              className="table__button btn btn_table"
            >
              Generate portfolio
            </GenerateWalletButton>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default Coin;
