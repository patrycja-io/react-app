mport React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  annualIncome: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  function NewCalculation(annualIncome) {
    dispatch({
      type: 'ADD_INCOME',
      payload: annualIncome
    });
  }

  return (<GlobalContext.Provider value={{
    annualIncome: state.annualIncome,
    NewCalculation
  }}>
    {children}
  </GlobalContext.Provider>);
}