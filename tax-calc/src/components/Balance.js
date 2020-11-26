import React, { useContext } from 'react';
  import { GlobalContext } from '../context/GlobalState';


  export const Balance = () => {
    const { annualIncome } = useContext(GlobalContext);

    const afterTax = annualIncome.map(annualIncome => annualIncome.amount);

    const total =  afterTax.reduce((acc, item) => (acc -= item), 0).toFixed(2);

    return (
      <>   <div class="container mt-5 d-flex justify-content-center align-items-center">
        <h2>Take Home £{total}</h2>
      </div>
      </>
    )
  }
