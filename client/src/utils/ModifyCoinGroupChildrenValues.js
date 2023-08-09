const ModifyCoinGroupChildrenValues =(
    currentChildrenValue, 
    currentChildrenFieldName,
    limits =0,
    reverse=false
    ) => {
    let color =""
    if (!!limits.min && !!limits.max && !!currentChildrenValue) {
        if (currentChildrenValue < limits.min) {
            color = "#FF0000"
        } 
        if (currentChildrenValue > limits.max) {
            color = "#008000"
        } 
        if (reverse) {
          if (currentChildrenValue < limits.min) {
            color = "#008000"
          };
          if (currentChildrenValue > limits.max) {
            color = "#FF0000"
          }
        }

      }

  
      if (
        typeof currentChildrenValue === "number" ||
        currentChildrenFieldName === "market_cap" ||
        currentChildrenFieldName === "total_supply"
      ) {
        if (currentChildrenFieldName === "market_cap" || currentChildrenFieldName === "total_supply") {
            Number(currentChildrenValue);
        }
        if (currentChildrenValue >= 1000000000000) {
            currentChildrenValue = `${(currentChildrenValue / 1000000000000)?.toFixed(2)} T`
        } else if (currentChildrenValue >= 1000000000) {
            currentChildrenValue = `${(currentChildrenValue / 1000000000)?.toFixed(2)} B`;
        } else if (currentChildrenValue >= 1000000) {
            currentChildrenValue = `${(currentChildrenValue / 1000000)?.toFixed(2)} M`;
        } else if (currentChildrenValue >= 1000) {
            currentChildrenValue = `${(currentChildrenValue / 1000)?.toFixed(2)} K`;
        }
        else if (0>currentChildrenValue <= 999)
        {
          if (typeof(currentChildrenValue) =="number") {
            currentChildrenValue =currentChildrenValue?.toFixed(0);

          }
         
        }
        else currentChildrenValue =+currentChildrenValue
    }
    return {color, currentChildrenValue}
}
export default ModifyCoinGroupChildrenValues