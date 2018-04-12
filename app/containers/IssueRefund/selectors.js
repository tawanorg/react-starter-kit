import { createSelector } from 'reselect';

/**
 * Direct selector to the issueRefund state domain
 */
const selectIssueRefundDomain = (state) => state.get('issueRefund');

/**
 * Other specific selectors
 */


/**
 * Default selector used by IssueRefund
 */

const makeSelectIssueRefund = () => createSelector(
  selectIssueRefundDomain,
  (substate) => substate.toJS()
);

const makeOrderInfo = () => createSelector(
  selectIssueRefundDomain,
  (substate) => substate.get('orderInfo').get('data')
);

const makeMembersItems = () => createSelector(
  selectIssueRefundDomain,
  (substate) => substate.get('orderInfo').get('data').MemberDetails
);

export default makeSelectIssueRefund;
export {
  selectIssueRefundDomain,
  makeOrderInfo,
  makeMembersItems
};
