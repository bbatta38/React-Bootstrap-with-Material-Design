import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Container = props => {
  const { className, fluid = false, size, tag: Tag = 'div', ...attributes } = props;

  const classes = classNames(fluid ? 'container-fluid' : size ? `container-${size}` : 'container', className);

  return <Tag data-test='container' {...attributes} className={classes} />;
};

Container.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default Container;
export { Container as MDBContainer };
