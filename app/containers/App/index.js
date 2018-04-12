/**
 *
 * App
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import helmetConfig from 'helmetConfig'; // eslint-disable-line import/no-unresolved
import { Switch, Route } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeNavigation } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      navigation,
    } = this.props;

    return (
      <Fragment>
        <Helmet
          {...helmetConfig}
        >
          <meta name="description" content={helmetConfig.description} />
        </Helmet>
        <Switch>
          {
            navigation.map(({ component, ...rest }) => (
              <Route {...rest} component={component} />
            ))
          }
        </Switch>
      </Fragment>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  navigation: makeNavigation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);
