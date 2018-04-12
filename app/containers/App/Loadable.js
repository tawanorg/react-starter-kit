/**
 *
 * Asynchronously loads the component for App
 *
 */

import Loadable from 'react-loadable';

import LoadingIndicator from 'components/LoadingIndicator';

export default Loadable({
  loader: () => require.ensure([], (require) => require("./index"), 'App'),
  loading: () => LoadingIndicator,
});
