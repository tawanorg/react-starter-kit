/**
*
* Button
*
*/

import { createElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DEFAULT_BUTTON = 'default'
const ALL_BUTTONS = [
  'primary',
  'secondary',
  'dark',
  'danger',
]

const getValidButtonTypes = (type) => {
  const btnType = Object.keys(type).reduce(d => d)
  const isValidBtn = ALL_BUTTONS.includes(btnType)
  if (isValidBtn) {
    return btnType
  }

  return DEFAULT_BUTTON
}

const Button = ({
  children,
  className,
  onClick,
  ...rest,
}) => {
  const buttonTypes = Object.keys(rest).length === 0 ? DEFAULT_BUTTON : getValidButtonTypes(rest)
  return createElement('button', {
    className: `btn btn-${buttonTypes} ${className}`,
    onClick,
  }, children)
}

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: 'Button Text',
  className: '',
  onClick: null,
};

export default styled(Button)`
  min-width: 120px;

  &.btn-default {
    border: 1px solid ${props => props.theme.button.color.grey};
    background-color: ${props => props.theme.button.color.secondary};
  }

  &.btn-primary {
    background-color: ${props => props.theme.button.color.blue};
    border-color: ${props => props.theme.button.color.blue};
  }

  &.btn-secondary {
    background-color: white;
    color: #333;
    border-color: ${props => props.theme.button.color.lightgrey};
  }
`
