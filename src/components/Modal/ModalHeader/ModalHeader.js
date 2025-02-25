import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalHeader = props => {
  let closeButton;
  const { className, children, toggle, tag: Tag = 'h4', closeAriaLabel = 'Close', titleClass, ...attributes } = props;

  const classes = classNames('modal-header', className);

  const titleClasses = classNames('modal-title', titleClass);

  if (toggle) {
    closeButton = (
      <button type='button' onClick={toggle} className='close' aria-label={closeAriaLabel}>
        <span aria-hidden='true'>{String.fromCharCode(215)}</span>
      </button>
    );
  }

  return (
    <div data-test='modal-header' {...attributes} className={classes}>
      <Tag className={titleClasses}>{children}</Tag>
      {closeButton}
    </div>
  );
};

ModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.func
};

export default ModalHeader;
export { ModalHeader as MDBModalHeader };
