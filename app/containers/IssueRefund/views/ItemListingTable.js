/* eslint-disable */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import CleanTable from 'components/CleanTable'
import CheckBoxWithLabel from 'components/CheckBoxWithLabel'
import CleanInput from 'components/CleanInput'
import CleanDropdown from 'components/CleanDropdown'
import List, { ListItem } from 'components/List'
import H6 from 'components/H6'
import { formatMoney } from 'helpers/formats'

import {
  OPTIONS_YES_NO,
  OPTIONS_REFUND_TYPES
} from '../constants'

class ItemListingTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleDropdownRefundTypeSelection = this.handleDropdownRefundTypeSelection.bind(this)
    this.handleDropdownMembershipSelection = this.handleDropdownMembershipSelection.bind(this)
  }

  handleDropdownRefundTypeSelection(e) {
    console.log('handleDropdownRefundTypeSelection', e)
  }

  handleDropdownMembershipSelection(e) {
    console.log('handleDropdownMembershipSelection', e)
  }

  renderItems(items) {
    return items.map((item, key) => (
      <tr key={key}>
        <th scope="row">
          <CheckBoxWithLabel name={item.MemberId}>{item.MemberName}</CheckBoxWithLabel>
          <ul className="list-unstyled pl-4">
            {item.ItemDetails.map((smallItem, key) => (
              <li>{`${smallItem.CurrencyCode} ${formatMoney(smallItem.ProductListPrice)} - ${smallItem.ProductName}`}</li>
            ))}
          </ul>
        </th>
        <td>{`${item.CurrencyCode} ${formatMoney(item.Amount)}`}</td>
        <td>
          <CleanDropdown>
            <List>
              {Object.keys(OPTIONS_REFUND_TYPES).map(key => (
                <ListItem
                  value={OPTIONS_REFUND_TYPES[key]}
                  onClick={this.handleDropdownRefundTypeSelection}
                >
                  {OPTIONS_REFUND_TYPES[key]}
                </ListItem>
              ))}
            </List>
          </CleanDropdown>
        </td>
        <td><CleanInput style={{ width: 150 }}/></td>
        <td>
          <CleanDropdown
            selected={item.CancelMembership}
            selectedText={OPTIONS_YES_NO[item.CancelMembership]}
          >
            <List>
              {Object.keys(OPTIONS_YES_NO).map(key => (
                <ListItem
                  value={OPTIONS_YES_NO[key]}
                  onClick={this.handleDropdownMembershipSelection}
                >
                  {OPTIONS_YES_NO[key]}
                </ListItem>
              ))}
            </List>
          </CleanDropdown>
        </td>
      </tr>
    ))
  }

  render() {
    const {
      items
    } = this.props

    return (
      <Fragment>
        <H6>Please select items to refund</H6>
        <CleanTable>
          <thead>
            <tr>
              <th style={{ width: 300 }}>ITEMS</th>
              <th>PRICE</th>
              <th style={{ width: 200 }}>REFUND AMOUNT</th>
              <th style={{ width: 150 }} />
              <th style={{ width: 200 }}>CANCEL MEMBERSHIP</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(items) && items.length > 0 && this.renderItems(items)}
          </tbody>
        </CleanTable>
      </Fragment>
    );
  }
}

ItemListingTable.propTypes = {
  items: PropTypes.array,
};

ItemListingTable.defaultProps = {
  items: [],
};

export default ItemListingTable
