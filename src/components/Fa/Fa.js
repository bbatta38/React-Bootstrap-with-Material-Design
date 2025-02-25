import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Fa = props => {
  const {
    border = false,
    brand = false,
    className = '',
    fab = false,
    duotone,
    fal = false,
    fad,
    far = false,
    solid,
    fixed = false,
    fas,
    flip = '',
    icon,
    inverse = false,
    light = false,
    list = false,
    pull = '',
    pulse = false,
    regular = false,
    rotate = '',
    size = '',
    spin = false,
    stack = '',
    ...attributes
  } = props;

  const iconPrefix =
    regular || far
      ? 'far'
      : solid || fas
      ? 'fas'
      : light || fal
      ? 'fal'
      : duotone || fad
      ? 'fad'
      : brand || fab
      ? 'fab'
      : 'fa';

  const classes = classNames(
    iconPrefix,
    list ? 'fa-li' : false,
    icon ? `fa-${icon}` : false,
    size ? `fa-${size}` : false,
    fixed ? 'fa-fw' : false,
    pull ? `fa-pull-${pull}` : false,
    border ? 'fa-border' : false,
    spin ? 'fa-spin' : false,
    pulse ? 'fa-pulse' : false,
    rotate ? `fa-rotate-${rotate}` : false,
    flip ? `fa-flip-${flip}` : false,
    inverse ? 'fa-inverse' : false,
    stack ? `fa-${stack}` : false,
    className
  );

  return <i data-test='fa' {...attributes} className={classes} />;
};

Fa.propTypes = {
  icon: PropTypes.string.isRequired,
  border: PropTypes.bool,
  brand: PropTypes.bool,
  className: PropTypes.string,
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  fixed: PropTypes.bool,
  flip: PropTypes.string,
  inverse: PropTypes.bool,
  light: PropTypes.bool,
  list: PropTypes.bool,
  pull: PropTypes.string,
  pulse: PropTypes.bool,
  regular: PropTypes.bool,
  rotate: PropTypes.string,
  size: PropTypes.string,
  spin: PropTypes.bool,
  stack: PropTypes.string
};

export default Fa;
export { Fa as MDBIcon };
