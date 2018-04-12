
import { fromJS } from 'immutable';
import issueRefundReducer from '../reducer';

describe('issueRefundReducer', () => {
  it('returns the initial state', () => {
    expect(issueRefundReducer(undefined, {})).toEqual(fromJS({}));
  });
});
