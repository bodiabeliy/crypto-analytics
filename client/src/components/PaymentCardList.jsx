import React from "react";
import PaymentCard from "./PaymentCard";
const PaymentCardList = (props) => {
    const {rates} = props
  return (
    <>
      <div class="price__main">
        {
            rates.map(rate => {
                return (
                <>
                 <PaymentCard rateInfo={rate}/>
                </>
                )
        })
        }
      </div>
    </>
  );
};

export default PaymentCardList;
