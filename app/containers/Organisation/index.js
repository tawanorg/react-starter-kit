/**
 *
 * Organisation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectOrganisation from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import subroutes from './subroutes';

export class Organisation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Organisation</title>
          <meta name="description" content="Description of Organisation" />
        </Helmet>
        <Switch>
          {
            subroutes.map(({ component, ...rest }) => (
              <Route {...rest} component={component} />
            ))
          }
        </Switch>
      </div>
    );
  }
}

Organisation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  organisation: makeSelectOrganisation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'organisation', reducer });
const withSaga = injectSaga({ key: 'organisation', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Organisation);
