/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch(action.type) {
      case 'ADD_INCOME':
        return {
          ...state,
          annualIncome: [action.payload, ...state.annualIncome]
        }
      default:
        return state;
    }
  }