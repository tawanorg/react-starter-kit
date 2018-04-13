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
  makeOrderId,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  requestOrderInfo
} from './actions'

// Components
import StaticModal from 'components/StaticModal';
import CleanTextArea from 'components/CleanTextArea';

// Custom views
import GeneralOrderInfo from './views/GeneralOrderInfo';
import ItemListingTable from './views/ItemListingTable';

// Sub-components
import Wrapper from './subcomponents/Wrapper';
import RefundButtons from './subcomponents/RefundButtons'

export class IssueRefund extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)

    this.handleOnSubmitModalButton = this.handleOnSubmitModalButton.bind(this)
  }

  handleOnSubmitModalButton(event, clicked) {
    event.preventDefault()
    switch (clicked) {
      case 'onConfirm':
        console.log('handleOnSubmitModalButton onConfirm')
        break;
      case 'onSubmit':
        console.log('handleOnSubmitModalButton onSubmit')
        break;
      case 'onCancel':
        console.log('handleOnSubmitModalButton onCancel')
        break;
      default:
    }
  }

  componentWillMount() {
    this.props.dispatch(requestOrderInfo(this.props.orderId))
  }

  staticModalHeaderProps() {
    return {
      title: 'Issue Refund',
      renderButtons: () => {
        return (
          <RefundButtons
            onCancel={(event) => { this.handleOnSubmitModalButton(event, 'onCancel')}}
            onSubmit={(event) => { this.handleOnSubmitModalButton(event, 'onSubmit')}}
            onConfirm={(event) => { this.handleOnSubmitModalButton(event, 'onConfirm')}}
          />
        )
      },
    }
  }

  render() {
    console.log('IssueRefund', this.props);
    const {
      orderInfo,
      memberItems,
    } = this.props;

    return (
      <div className="container">
        <Helmet>
          <title>IssueRefund</title>
          <meta name="description" content="Description of IssueRefund" />
        </Helmet>
        <Wrapper>
          <StaticModal
            {...this.staticModalHeaderProps()}
          >
            <GeneralOrderInfo {...orderInfo} />
            <ItemListingTable items={memberItems} />
            <CleanTextArea label="Refund reason" style={{ width: 300 }}/>
          </StaticModal>
        </Wrapper>
      </div>
    );
  }
}

IssueRefund.propTypes = {
  dispatch: PropTypes.func.isRequired,
  orderInfo: PropTypes.object,
  memberItems: PropTypes.array,
};

IssueRefund.defaultProps = {
  orderInfo: {},
  memberItems: [],
};

const mapStateToProps = (state, ownProps) => createStructuredSelector({
  orderInfo: makeOrderInfo(),
  memberItems: makeMembersItems(),
  orderId: makeOrderId(ownProps),
});

function mapDispatchToProps(dispatch, getState) {
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
