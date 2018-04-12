/**
 *
 * IssueRefund
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeOrderInfo,
  makeMembersItems,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// Components
import StaticModal from 'components/StaticModal';

// Custom views
import GeneralOrderInfo from './views/GeneralOrderInfo';
import ItemListingTable from './views/ItemListingTable';

// Sub-components
import Wrapper from './subcomponents/Wrapper';

export class IssueRefund extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('IssueRefund', this.props);
    const {
      orderInfo,
      memberItems,
    } = this.props;

    return (
      <Fragment>
        <Helmet>
          <title>IssueRefund</title>
          <meta name="description" content="Description of IssueRefund" />
        </Helmet>
        <Wrapper>
          <StaticModal>
            <GeneralOrderInfo {...orderInfo} />
            <ItemListingTable items={memberItems} />
          </StaticModal>
        </Wrapper>
      </Fragment>
    );
  }
}

IssueRefund.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  orderInfo: makeOrderInfo(),
  memberItems: makeMembersItems(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'issueRefund', reducer });
const withSaga = injectSaga({ key: 'issueRefund', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(IssueRefund);
