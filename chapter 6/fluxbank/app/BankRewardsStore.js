import AppDispatcher from './AppDispatcher';
import BankBalanceStore from './BankBalanceStore'
import bankConstants from './constants';
import {ReduceStore} from 'flux/utils';

class BankRewardsStore extends ReduceStore {
  getInitialState() {
    return 'Basic';
  }
  reduce(state, action){
    this.getDispatcher().waitFor([
      BankBalanceStore.getDispatchToken()
    ]);

    if (action.type === bankConstants.DEPOSITED_INTO_ACCOUNT ||
        action.type === bankConstants.WITHDREW_FROM_ACCOUNT ) {
      let balance = BankBalanceStore.getState();
      if (balance < 5000)
        return 'Basic';
      else if (balance < 10000)
        return 'Silver';
      else if (balance < 50000)
        return 'Gold';
      else
        return 'Platinum';
    }
    return state;
  }
}
export default new BankRewardsStore(AppDispatcher);
