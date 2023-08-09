import React, {useState} from 'react';
import PageContainer from "../components/UI/PageContainer/PageContainer";
import GenerateWalletButton from "../components/UI/Button/Button";
import PaymentList from '../components/PaymentCardList';
import PaymentBenefitList from '../components/PaymentBenefitsList';



const rateList =[
  {id:1, rateTitle:"Advenced", ratePrice:200},
]
const  rateBenefits =[`a certain number of indicators of selected cryptocurrencies
recommendations on the benefits for each selected cryptocurrency`, `Cost in dollars and cryptocurrency`, `access to blured field of coin`]
const Payments = () => {
   
    return (
       <>
       <PageContainer
         pageName={"payments"}
         sectionName={"page__main-title main-title container"}
       >
        <>
				<PaymentList rates={rateList} />
        <PaymentBenefitList benefits={rateBenefits}/>
        <GenerateWalletButton
              typeLink="link"
              onClick={() =>{}}
              type="button"
              className="table__button btn btn_table"
            >
            Donate
        </GenerateWalletButton>
        </>
       </PageContainer>
       </>
    );
};

export default Payments;