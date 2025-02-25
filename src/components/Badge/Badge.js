import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Badge = props => {
  const { tag: Tag = 'span', className, children, color = 'default', pill = false, ...attributes } = props;

  const classes = classNames('badge', color, `badge-${color}`, pill ? 'badge-pill' : false, className);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Tag data-test='badge' {...attributes} className={classes}>
      {children}
    </Tag>
  );
};
Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.string
};

export default Badge;
export { Badge as MDBBadge };
