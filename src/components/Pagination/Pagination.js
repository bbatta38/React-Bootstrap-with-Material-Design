import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Pagination = props => {
  const { children, circle = false, className = '', color = '', tag: Tag = 'ul', size, ...attributes } = props;

  const classes = classNames(
    {
      'pagination-circle': circle,
      [`pg-${color}`]: color,
      [`pagination-${size}`]: size
    },
    'pagination',
    className
  );

  return (
    <Tag data-test='pagination' {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

Pagination.propTypes = {
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'sm']),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default Pagination;
export { Pagination as MDBPagination };
