import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PageItem = props => {
  const { active = false, className = '', children, disabled = false, tag: Tag = 'li', ...attributes } = props;

  const classes = classNames(
    {
      disabled: disabled,
      active: active
    },
    'page-item',
    className
  );

  return (
    <Tag data-test='page-item' {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

PageItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default PageItem;
export { PageItem as MDBPageItem };
