/**
*
* CleanInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CleanInput = ({
  className,
  label
}) => {
  return (
    <div className={className}>
      {label && <label for="">{label}</label>}
      <div className="input-group">
        <input type="text" className="form-control" id="" aria-describedby="basic-addon3" />
      </div>
    </div>
  )
}

CleanInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string
};

CleanInput.defaultProps = {
  className: '',
  label: null
};

export default styled(CleanInput)`
  .form-control {
  	border-radius: 4px;
    border: 1px solid ${props => props.theme.color.grey};
  	background-color: ${props => props.theme.color.secondary};
  }
`;
