/**
 * Asynchronously loads the component for FeaturePage
 */
import Loadable from 'react-loadable';

import LoadingIndicator from 'components/LoadingIndicator';

export default Loadable({
  loader: () => require.ensure([], (require) => require("./index"), 'FeaturePage'),
  loading: LoadingIndicator,
});
