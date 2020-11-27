import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeTax';
import { NewCalculation } from './components/NewCalculation';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container"> 
      <NewCalculation />
      <IncomeExpenses />
        <Balance />
      </div>
    </GlobalProvider>
  );
}

export default App;
