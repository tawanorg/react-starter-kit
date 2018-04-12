/**
*
* Button
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Button = ({
  className,
}) => (
  <div className={className}>
      Button
    </div>
  );

Button.propTypes = {
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default styled(Button)`
  color: inherit;
`;
