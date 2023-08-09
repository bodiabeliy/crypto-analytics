import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { useGetResultCoinQuery } from "../redux/table/tableApiSlice";
import axios from "axios";

import Chart from "../components/Chart";
import MobileChart from "../components/MobileChart";
import PageContainer from "../components/UI/PageContainer/PageContainer";

import colorGenerator from "../utils/ColorGenerator";

const adjustPercent = (list) => {
  let sum = 0;
  list.forEach((elem) => {
    sum += elem.percent;
  });
  const rest = 100 - sum;
  const add = Number((rest / list.length).toFixed(2));
  return list.map((elem) => {
    return { ...elem, percent: elem.percent + add };
  });
};

const ResultSearch = () => {
  const location = useLocation();
  const timestampRef = useRef(Date.now()).current;
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [sortedData, setSortedData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [chartColor, setChartColor] = useState(`rgba(112, 89, 225`);

  useEffect(() => {
    window
      .matchMedia("(orientation : portrait)")
      .addEventListener("change", (e) => {
        const portrait = e.matches;
        if (portrait) {
          setWindowSize(window.innerWidth);
          setChartColor("black");
        } else {
          setWindowSize(window.innerWidth);
          setChartColor(`rgba(112, 89, 225`);
        }
      });
  }, [windowSize]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://cryptoon.online/api/calculating/getTop?timestamp=${timestampRef}`
        );
        const list = [];
        data.forEach((elem) => {
          if (elem.coin !== "nothing" && typeof elem.coin === "string")
            list.push(elem);
        });
        let sorted = list.sort((a, b) => (a.percent < b.percent ? 1 : -1));
        sorted = adjustPercent(sorted);
        setSortedData(sorted);

        setChartData(
          sorted.map((elem) => {
            if (elem.coin !== "nothing" && typeof elem.coin === "string")
              return {
                name: elem.coin,
                value: elem.percent,
                fill: colorGenerator(),
              };
          })
        );
        setIsSuccess(true);
      } catch (e) {
        setIsSuccess(false);
        console.log(e);
      }
    };
    fetchData();
  }, [timestampRef]);

  const generateNumber = location.pathname.split("/").slice(-1)[0].slice(7, 12);
  if (!isSuccess) return null;
  return (
    <>
      <PageContainer
        pageName={"page"}
        sectionName={"page__result result container"}
      >
        <div className="project__main">
          <h2 className="project__title">Statement №{generateNumber}</h2>
        </div>

        <section className="page__table table">
          <div className="table__wrapper">
            <div className="table__grid-result table__grid-row_title">
              <div className="grid__item">Name</div>
              <div className="grid__item">Price</div>

              <div className="grid__item">Raiting</div>
            </div>
            {sortedData?.map((elem) => (
              <div key={elem.coin.name} className="table__grid-result">
                <div className="grid__item">{elem.coin}</div>
                <div className="grid__item">{elem.price}</div>
                <div className="grid__item">{elem.percent}%</div>
              </div>
            ))}
          </div>
        </section>
        <div style={{ height: "420px" }}>
          {windowSize > 768 ? (
            <Chart data={chartData} chartColor={chartColor} />
          ) : (
            <MobileChart data={chartData} chartColor={chartColor} />
          )}
        </div>
      </PageContainer>
    </>
  );
};

export default ResultSearch;
