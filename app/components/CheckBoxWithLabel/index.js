/**
*
* CheckBoxWithLabel
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckBoxWithLabel = ({
  children,
  name,
}) => (
  <div className="custom-control custom-checkbox">
    <input type="checkbox" className="custom-control-input" id={name} />
    <label className="custom-control-label" htmlFor={name}>{children}</label>
  </div>
  );

CheckBoxWithLabel.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
};

CheckBoxWithLabel.defaultProps = {
  name: 'CheckboxName',
};

export default CheckBoxWithLabel;
