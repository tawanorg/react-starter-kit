/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import CleanTable from 'components/CleanTable'

import { formatMoney, formatDateTime } from 'helpers/formats'

export const GeneralOrderInfo = ({
  CurrencyCode,
  OrderAmount,
  OrderId,
  OrderedBy,
  OrderedDate,
}) => {
  const data = [
    {
      column: "Order ID",
      value: OrderId
    },
    {
      column: "Amount",
      value: `${CurrencyCode} ${formatMoney(OrderAmount)}`
    },
    {
      column: "Purchased by",
      value: `${OrderedBy}`
    },
    {
      column: "Purchased date",
      value: formatDateTime(OrderedDate)
    }
  ];

  return (
    <CleanTable>
      <tbody>
        {data.map(({ column, value }, key) => (
          <tr>
            <th>{column}</th>
            <th>{value}</th>
          </tr>
        ))}
      </tbody>
    </CleanTable>
  );
}

GeneralOrderInfo.propTypes = {
  CurrencyCode: PropTypes.string,
  OrderAmount: PropTypes.string,
  OrderId: PropTypes.string,
  OrderedBy: PropTypes.string,
  OrderedDate: PropTypes.string,
};

GeneralOrderInfo.defaultProps = {
  CurrencyCode: '',
  OrderAmount: '',
  OrderId: '',
  OrderedBy: '',
  OrderedDate: '',
};

export default GeneralOrderInfo
