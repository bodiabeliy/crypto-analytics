import React, { useEffect, useState } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { Tooltip } from "@mui/material";

import RenamingCoinField from "../utils/RenamingCoinFieldsDictionary";
import RenamingCoinTooltipsDictionary from "../utils/RenamingCoinTooltipsDictionary"
import ModifyCoinGroupChildrenValues from "../utils/ModifyCoinGroupChildrenValues"
const CoinInfo = ({
  name,
  isBlured,
  limits,
  reverse,
  visible,
  blurable,
  groupedCoinFields,
  coinDetailize,
}) => {

  return (
    <div  style={{ filter: isBlured ? "blur(4px)" : "blur(0)" }}>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        defaultExpanded={[name]}
      >
        <TreeItem
          style={{margin: "10px"}}
          nodeId={name}
          label={
            <>
           
              <div className="grid__item-flex">
                <div className="grid__item-text">
                  {name}
                </div>

              </div>
            </>
          }
          children={groupedCoinFields.map((groupedCoinField) => {

            let modifyCoinGroupChildrenData =ModifyCoinGroupChildrenValues(coinDetailize[groupedCoinField], groupedCoinField,  limits, reverse)
            return visible[groupedCoinField] &&(
              <div className="coinInfoChildren">
                <div className="grid__item-flex">
                  <div className="grid__item-text"  style={{ filter: blurable[groupedCoinField] ? "blur(4px)" : "blur(0)" }}>
                    {RenamingCoinField(groupedCoinField)}
                  <Tooltip 
                    title={RenamingCoinTooltipsDictionary(groupedCoinField)} 
                    enterTouchDelay={0}
                  >
                    <span className="grid__item-i">i</span>
                  </Tooltip>
                  </div>
                  
                  <div className="grid__item-value" style={{ color: modifyCoinGroupChildrenData.color, filter: blurable[groupedCoinField] ? "blur(4px)" : "blur(0)"}}>
                    {coinDetailize[groupedCoinField]
                      ? modifyCoinGroupChildrenData.currentChildrenValue
                      : "-"}
                  </div>
                </div>
              </div>
            );
          })}
        ></TreeItem>
      </TreeView>
    </div>
  );
};

export default CoinInfo;
