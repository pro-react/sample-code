import constants from './constants';
import update from 'react-addons-update';
import { combineReducers } from 'redux';

const initialState = {
  bankBalance: {
    balance: 0,
    balanceHistory: []
  },
  initialUI: {
    showExchange: true,
  },
}




const balanceReducer = (state = initialState.bankBalance, action) => {
  switch (action.type) {
    case constants.DEPOSIT_INTO_ACCOUNT:
      return update(state, {
        balanceHistory: { $push: [state.balance] },
        balance: { $apply: value => value + parseFloat(action.amount) }
      });

    case constants.WITHDRAW_FROM_ACCOUNT:
      return update(state, {
        balanceHistory: { $push: [state.balance] },
        balance: { $apply: value => value - parseFloat(action.amount) }
      });

    case constants.ROLLBACK:
      let previousStateIndex = state.balanceHistory.length -1;
      if(previousStateIndex >= 0){
        return update(state, {
          // Changes the current balance to the value of the latest balance on history
          balance: { $set: state.balanceHistory[previousStateIndex] },
          // Removes the latest balance from history
          balanceHistory: {$splice: [[previousStateIndex, 1]]},
        });
      }
      
    default:
      return state;
  }
};




const uiReducer = (state = initialState.initialUI, action) => {
  switch (action.type) {
    case constants.TOGGLE_EXCHANGE:
      return update(state, { showExchange: { $apply: currentState => !currentState }});
    default:
      return state;
  }
};

const bankReducer = combineReducers({balance:balanceReducer, ui: uiReducer});

export default bankReducer;
