/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import globalRoutes from '../../globalRoutes';

import {
  DEFAULT_ROUTES,
} from './constants';

const initialState = fromJS({
  navigation: globalRoutes,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ROUTES:
      return state;
    default:
      return state;
  }
}

export default appReducer;
