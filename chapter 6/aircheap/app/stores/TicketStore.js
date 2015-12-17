import AppDispatcher from '../AppDispatcher';
import AirportActions from '../actions/AirportActionCreators';
import constants from '../constants';
import RouteStore from './RouteStore';
import {ReduceStore} from 'flux/utils';

class TicketStore extends ReduceStore {
  getInitialState() {
    return [];
  }
  reduce(state, action){
    switch (action.type) {
      case constants.FETCH_TICKETS:
        return [];
      case constants.FETCH_TICKETS_SUCCESS:
        return action.payload.response;
      default:
        return state;
    }
  }
}
export default new TicketStore(AppDispatcher);
