import React, {useState} from "react";
import Input from "../components/UI/Input/Input";

const PaymentCard = (props) => {
    const {rateInfo} = props
    const [hovered, setHovared] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleMouseOver = () => {
        setHovared(true);
    };
  
    const handleMouseOut = () => {
        setHovared(false);
    };


    return ( 
        <>
        <div 
            class={hovered && !checked?"price__item hover":checked?"price__item checked":"price__item"}
        >
          <div class="price__radio">
            <div 
                class="price__item-radio"
                onMouseOver={handleMouseOver}
                onMouseOut ={handleMouseOut}   
            >
              <Input
                id={"advanced"}
                value={rateInfo.rateTitle}
                onChange={() => setChecked(!checked)}
                type="radio"
                name="rate"
                class="price__input-radio"
                labelClass="price__item-title price__item-title_radio"
                labelChidren={<><span>{rateInfo.rateTitle}</span></>}
                checked={checked}
              />
            </div>
          </div>
          <div class="price__content">
            <div class="price__subtext">Price</div>
            <div class="price__num">{rateInfo.ratePrice}$</div>
          </div>
          
        </div>
        </>
     );
}
 
export default PaymentCard;