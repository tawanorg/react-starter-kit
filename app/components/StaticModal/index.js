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
}) => (
  <div className={`modal-content ${className}`}>
    <div className="modal-header">
      <span className="modal-title">{title}</span>
    </div>
    <div className="modal-body">
      {children}
    </div>
    {renderButtons && renderButtons()}
  </div>
  );

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

export default StaticModal;
