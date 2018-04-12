/*
 *
 * IssueRefund reducer
 *
 */
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import * as constants from './constants';
const initialState = fromJS({
  data: [],
  isFetching: false,
  isFetched: false,
  isError: false,
});

function orderInfoReducer(state = initialState, action) {
  switch (action.type) {
    case constants.REQUEST_ORDER_INFO:
      return state
            .set('isFetching', true);
    case constants.LOADED_ORDER_INFO:
      const { data } = action.payload;
      return state
            .set('isFetching', false)
            .set('isFetched', true)
            .set('data', data);
    case constants.ERROR_ORDER_INFO:
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  orderInfo: orderInfoReducer,
});
