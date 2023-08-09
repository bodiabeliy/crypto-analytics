import React from "react";
import PaymentBenefit from "./PaymentBenefit";
const PaymentCardList = (props) => {
  const { benefits } = props;
  return (
    <>
      <div class="price__advantages">
      <div class="price__advantages-text">What you get:</div>
        {benefits.map((benefit) => {
          return (
            <>
              <div class="price__advantages">
                <ul class="price__advantages-list">
                    <PaymentBenefit benefitInfo={benefit}/>                 
                </ul>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default PaymentCardList;
