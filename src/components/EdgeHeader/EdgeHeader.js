import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const EdgeHeader = props => {
  const { color = 'deep-purple', className, tag: Tag = 'div', ...attributes } = props;

  const classes = classNames('edge-header', color, className);

  return <Tag data-test='edgeHeader' {...attributes} className={classes} />;
};

EdgeHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default EdgeHeader;
export { EdgeHeader as MDBEdgeHeader };
