
import {
  requestOrderInfo,
} from '../actions';
import {
  REQUEST_ORDER_INFO,
} from '../constants';

describe('IssueRefund actions', () => {
  describe('Default Action', () => {
    it('has a type of REQUEST_ORDER_INFO', () => {
      const expected = {
        type: REQUEST_ORDER_INFO,
      };
      expect(requestOrderInfo()).toEqual(expected);
    });
  });
});
