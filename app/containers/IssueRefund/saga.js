import { all, fork, take, call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  // API
  REFUND_API_URL,
  REFUND_REFUNDABLE_ORDER_ITEMS,
  // Redux
  REQUEST_ORDER_INFO,
} from './constants';
import * as actions from './actions';
import { makeOrderId } from './selectors'

function* fetchOrderInfo({ payload }) {
  const id = payload.id
  const endpoint = `${REFUND_API_URL}${REFUND_REFUNDABLE_ORDER_ITEMS}`;
  const fetchOption = {
    method: 'POST',
    body: JSON.stringify({
      orderId: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = yield call(request, endpoint, fetchOption);
    yield put(actions.loadedOrderInfo(response.OrderDetails));
  } catch (e) {
    yield put(actions.errorOrderInfo(e));
  }
}

// Individual exports for testing
export default function* root() {
  yield fork(takeLatest, REQUEST_ORDER_INFO, fetchOrderInfo)
}
