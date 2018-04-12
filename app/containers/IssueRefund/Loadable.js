/**
 *
 * Asynchronously loads the component for IssueRefund
 *
 */

import Loadable from 'react-loadable';

import LoadingIndicator from 'components/LoadingIndicator';

export default Loadable({
  loader: () => require.ensure([], (require) => require("./index"), 'IssueRefund'),
  loading: () => LoadingIndicator,
});
