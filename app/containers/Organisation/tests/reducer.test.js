
import { fromJS } from 'immutable';
import organisationReducer from '../reducer';

describe('organisationReducer', () => {
  it('returns the initial state', () => {
    expect(organisationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
