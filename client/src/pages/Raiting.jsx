import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import { useFetchAllCoinsQuery } from "../redux/table/tableApiSlice";
import UserTable from "../components/UserTable";
import PageContainer from "../components/UI/PageContainer/PageContainer";
const Rating = () => {
  const { data, isLoading, isSuccess } = useFetchAllCoinsQuery();
  console.log("data", data);

  if (!isSuccess || isLoading)
    return (
      <div style={{ width: "80vw", margin: "0 auto" }}>
        <Typography
          textAlign={"center"}
          fontSize={36}
          fontWeight={700}
          color={"#56585a"}
        >
          Loading
        </Typography>
        <LinearProgress />
      </div>
    );
  return (
    <>
      <PageContainer
        pageName={"page"}
        sectionName={"page__table table container"}
      >
        <UserTable coinsRaitingList={data} />
      </PageContainer>
    </>
  );
};

export default Rating;
