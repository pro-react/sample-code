import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';

let BankActions = {

  /**
   * Create an account with an empty value
   */
  createAccount() {
    AppDispatcher.dispatch({
      type: bankConstants.CREATED_ACCOUNT,
      ammount: 0
    });
  },

  /**
   * @param  {number} ammount to whithdraw
   */
  depositIntoAccount(ammount) {
    AppDispatcher.dispatch({
      type: bankConstants.DEPOSITED_INTO_ACCOUNT,
      ammount: ammount
    });
  },

  /**
   * @param  {number} ammount to whithdraw
   */
  withdrawFromAccount(ammount) {
    AppDispatcher.dispatch({
      type: bankConstants.WITHDREW_FROM_ACCOUNT,
      ammount: ammount
    });
  }

};

export default BankActions;
