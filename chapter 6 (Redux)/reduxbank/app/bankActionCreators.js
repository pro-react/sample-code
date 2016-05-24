import constants from './constants';

const bankActionCreators = {
  /**
   * @param  {number} ammount to whithdraw
   */
  depositIntoAccount(amount) {
    return {
      type: constants.DEPOSIT_INTO_ACCOUNT,
      amount: amount
    };
  },

  /**
   * @param  {number} amount to whithdraw
   */
  withdrawFromAccount(amount) {
    return {
      type: constants.WITHDRAW_FROM_ACCOUNT,
      amount: amount
    };
  },


  /**
   * Toggle the visibility of the exchange rate
   */
  toggleExchange() {
    return {
      type: constants.TOGGLE_EXCHANGE
    };
  }


};

export default bankActionCreators;
