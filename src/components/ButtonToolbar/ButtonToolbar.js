import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonToolbar = ({ className, children, role = 'toolbar', ...attributes }) => {
  const classes = classNames(className, 'btn-toolbar');

  return (
    <div data-test='button-toolbar' {...attributes} className={classes}>
      {children}
    </div>
  );
};

ButtonToolbar.propTypes = {
  'aria-label': PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  role: PropTypes.string
};

export default ButtonToolbar;
export { ButtonToolbar as MDBBtnToolbar };
