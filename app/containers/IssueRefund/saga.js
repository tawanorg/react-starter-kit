import { fork, take, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import {
  REFUND_API_URL,
  REFUND_REFUNDABLE_ORDER_ITEMS,
} from './constants';
import * as actions from './actions';

export function* fetchOrderInfo() {
  yield put(actions.requestOrderInfo());

  const endpoint = `${REFUND_API_URL}${REFUND_REFUNDABLE_ORDER_ITEMS}`;
  const payload = {
    method: 'POST',
    body: JSON.stringify({
      orderId: 202837,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = yield call(request, endpoint, payload);
    yield put(actions.loadedOrderInfo(response.OrderDetails));
  } catch (e) {
    yield put(actions.errorOrderInfo(e));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield fork(fetchOrderInfo);
}
