import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';



export const IncomeExpenses = () => {
  const { annualIncome } = useContext(GlobalContext);

  

  

  return (
    <div className="inc-exp-container">
        <div>
          <h4> Annual Income</h4>
  <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Tax to Pay</h4>
  <p className="money minus">{expense}</p>
        </div>
      </div>
  )
}
