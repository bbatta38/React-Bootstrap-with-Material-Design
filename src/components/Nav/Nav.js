import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Nav = props => {
  const {
    children,
    className,
    tag: Tag = 'ul',
    tabs = false,
    color,
    classicTabs = false,
    pills = false,
    header = false,
    ...attributes
  } = props;

  const classes = classNames(
    'nav',
    tabs && 'md-tabs',
    pills && 'md-pills',
    header && 'nav-pills card-header-pills',
    color && !tabs && !classicTabs && !pills ? color : false,
    pills && color ? `pills-${color}` : false,
    (tabs || classicTabs) && color ? `tabs-${color}` : false,
    className
  );

  return (
    <Tag data-test='nav' {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

Nav.propTypes = {
  children: PropTypes.node,
  classicTabs: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  header: PropTypes.bool,
  pills: PropTypes.bool,
  tabs: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default Nav;
export { Nav as MDBNav };
