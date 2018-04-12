/* eslint-disable */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import CleanTable from 'components/CleanTable'
import CheckBoxWithLabel from 'components/CheckBoxWithLabel'

class ItemListingTable extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems(items) {
    return items.map((item, key) => (
      <tr key={key}>
        <th scope="row">
          <CheckBoxWithLabel name={item.MemberId}>{item.MemberName}</CheckBoxWithLabel>
          <ul className="list-unstyled pl-4">
            {item.ItemDetails.map((smallItem, key) => (
              <li>{`${smallItem.CurrencyCode} ${smallItem.ProductListPrice} - ${smallItem.ProductName}`}</li>
            ))}
          </ul>
        </th>
        <td>{`${item.CurrencyCode} ${item.Amount}`}</td>
        <td>{`${item.RefundType}`}</td>
        <td>Otto</td>
        <td>{item.CancelMembership}</td>
      </tr>
    ))
  }

  render() {
    const {
      items
    } = this.props

    return (
      <Fragment>
        <p>Please select items to refund</p>
        <CleanTable>
          <thead>
            <tr>
              <th scope="col">ITEMS</th>
              <th scope="col">PRICE</th>
              <th scope="col">REFUND AMOUNT</th>
              <th scope="col"></th>
              <th scope="col">CANCEL MEMBERSHIP</th>
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
