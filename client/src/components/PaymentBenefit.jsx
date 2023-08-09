import React from "react";
import Image from "./UI/Image/Image";

const PaymentBenefit = (props) => {
  const { benefitInfo } = props;

  return (
    <>
      <li class="price__advantages-item">
        <Image 
          type={"image/webp"}
          srcImage={require("../assets/img/dott.png")}
          srcImageClass={"price__advantages-image"}
        />
        <p class="price__advantages-subtext">
          {benefitInfo}
        </p>
      </li>
    </>
  );
};

export default PaymentBenefit;
