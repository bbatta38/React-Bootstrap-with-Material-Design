import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PopoverHeader = ({ attributes, children, className = '', tag: Tag = 'h3' }) => {
  const classes = classNames('popover-header', className);

  return (
    <Tag data-test='popover-header' {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

PopoverHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default PopoverHeader;
export { PopoverHeader as MDBPopoverHeader };
