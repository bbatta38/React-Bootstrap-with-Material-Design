import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Col = props => {
  const {
    xs = null,
    sm = null,
    md = null,
    lg = null,
    xl = null,
    top,
    bottom,
    middle,
    size,
    className,
    tag: Tag = 'div',
    ...attributes
  } = props;

  const classes = classNames(
    size && `col-${size}`,
    xs && `col-xs-${xs}`,
    sm && `col-sm-${sm}`,
    md && `col-md-${md}`,
    lg && `col-lg-${lg}`,
    xl && `col-xl-${xl}`,
    !size && !xs && !sm && !md && !lg && !xl ? 'col' : '',
    top && 'align-self-start',
    middle && 'align-self-center',
    bottom && 'align-self-end',
    className
  );

  return <Tag data-test='col' {...attributes} className={classes} />;
};

Col.propTypes = {
  bottom: PropTypes.bool,
  className: PropTypes.string,
  lg: PropTypes.string,
  md: PropTypes.string,
  middle: PropTypes.bool,
  size: PropTypes.string,
  sm: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
  xl: PropTypes.string,
  xs: PropTypes.string
};

export default Col;
export { Col as MDBCol };
