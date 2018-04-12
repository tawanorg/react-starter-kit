
import {
  defaultRoutes,
} from '../actions';
import {
  DEFAULT_ROUTES,
} from '../constants';

describe('App actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ROUTES', () => {
      const expected = {
        type: DEFAULT_ROUTES,
      };
      expect(defaultRoutes()).toEqual(expected);
    });
  });
});
