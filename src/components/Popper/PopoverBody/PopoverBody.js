import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PopoverBody = ({ attributes, children, className, tag: Tag = 'div' }) => {
  const classes = classNames('popover-body', className);

  return (
    <Tag data-test='popover-body' {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

PopoverBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default PopoverBody;
export { PopoverBody as MDBPopoverBody };
