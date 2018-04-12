import { createSelector } from 'reselect';

/**
 * Direct selector to the organisation state domain
 */
const selectOrganisationDomain = (state) => state.get('organisation');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Organisation
 */

const makeSelectOrganisation = () => createSelector(
  selectOrganisationDomain,
  (substate) => substate.toJS()
);

export default makeSelectOrganisation;
export {
  selectOrganisationDomain,
};
