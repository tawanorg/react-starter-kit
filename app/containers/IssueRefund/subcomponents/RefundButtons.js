/* eslint-disable */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import styled from 'styled-components'

const StaticModalFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid ${props => props.theme.color.grey};
  button:last-child {
    margin-left: 1rem;
  }
`

export const RefundButtons = ({
  onCancel: handleOnCancel,
  onSubmit,
  onConfirm: handleOnConfirm,
}) => {
  return (
    <StaticModalFooter className="d-flex flex-row justify-content-end">
      {handleOnCancel && <Button secondary onClick={handleOnCancel}>Cancel</Button>}
      {handleOnConfirm && <Button primary onClick={handleOnConfirm}>Confirm</Button>}
    </StaticModalFooter>
  );
}

RefundButtons.propTypes = {
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  onConfirm: PropTypes.func,
};

RefundButtons.defaultProps = {
  onCancel: null,
  onSubmit: null,
  onConfirm: null,
};

export default RefundButtons
