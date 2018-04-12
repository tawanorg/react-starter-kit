/**
*
* StaticModal
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StaticModal = ({
  children,
  className,
  renderButtons,
  title,
}) => {
  return (
    <div className={`modal-content ${className}`}>
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
      </div>
      <div className="modal-body">
        {children}
      </div>
      {
        renderButtons &&
        <div className="modal-footer d-flex">
          {renderButtons()}
        </div>
      }
    </div>
  )
}

StaticModal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  renderButtons: PropTypes.func,
  title: PropTypes.string,
};

StaticModal.defaultProps = {
  className: null,
  renderButtons: null,
  title: 'Modal Title Text',
};

export default StaticModal
