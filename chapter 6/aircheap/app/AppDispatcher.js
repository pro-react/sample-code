import {Dispatcher} from 'flux';
import 'babel-polyfill';


class AppDispatcher extends Dispatcher{
  dispatch(action = {}) {
    console.log("Dispatched", action.type);
    super.dispatch(action);
  }

  /**
   * Dispatches three actions for an async operation represented by promise.
   */
  dispatchAsync(promise, types, payload){
    const { request, success, failure } = types;
    this.dispatch({ type: request, payload: Object.assign({}, payload) });
    promise.then(
      (response) => {
        this.dispatch({
          type: success,
          payload: Object.assign({}, payload, { response })
        })
      },
      error => this.dispatch({
        type: failure,
        payload: Object.assign({}, payload, { error })
      })
    );
  }
}

export default new AppDispatcher();
