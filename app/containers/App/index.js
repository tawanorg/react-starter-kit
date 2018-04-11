/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import helmetConfig from 'helmetConfig'; // eslint-disable-line import/no-unresolved
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// components
import Header from 'components/Header';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Fragment>
        <Helmet
          {...helmetConfig}
        >
          <meta name="description" content={helmetConfig.description} />
        </Helmet>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Fragment>
    );
  }
}
