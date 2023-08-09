import React from "react";
import { Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
const Loader = ({title}) => {
    return ( <div style={{ width: "80vw", margin: "0 auto" }}>
    <Typography
      textAlign={"center"}
      fontSize={36}
      fontWeight={700}
      color={"#56585a"}
    >
      {title}
    </Typography>
    <LinearProgress />
  </div> );
}
 
export default Loader;