import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FreeBird = props => {
  const { className, tag: Tag = 'div', ...attributes } = props;

  const classes = classNames('container free-bird', className);

  return <Tag data-test='freebird' {...attributes} className={classes} />;
};

FreeBird.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default FreeBird;
export { FreeBird as MDBFreeBird };
