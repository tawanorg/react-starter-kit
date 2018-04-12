/**
 *
 * Asynchronously loads the component for Organisation
 *
 */

import Loadable from 'react-loadable';

import LoadingIndicator from 'components/LoadingIndicator';

export default Loadable({
  loader: () => require.ensure([], (require) => require("./index"), 'Organisation'),
  loading: () => LoadingIndicator,
});
