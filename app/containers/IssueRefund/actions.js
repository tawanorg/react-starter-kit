/*
 *
 * IssueRefund actions
 *
 */

import * as constants from './constants';

export function requestOrderInfo(id) {
  return {
    type: constants.REQUEST_ORDER_INFO,
    payload: {
      id,
    }
  };
}

export function loadedOrderInfo(data) {
  return {
    type: constants.LOADED_ORDER_INFO,
    payload: {
      data,
    },
  };
}

export function errorOrderInfo(error) {
  return {
    type: constants.ERROR_ORDER_INFO,
    payload: {
      error,
    }
  };
}
