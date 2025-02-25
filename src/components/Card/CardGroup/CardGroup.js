import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardGroup = props => {
  const { className, tag: Tag = 'div', deck, column, ...attributes } = props;

  const classes = classNames(deck ? 'card-deck' : column ? 'card-columns' : 'card-group', className);

  return <Tag data-test='card-group' {...attributes} className={classes} />;
};

CardGroup.propTypes = {
  className: PropTypes.string,
  column: PropTypes.bool,
  deck: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default CardGroup;
export { CardGroup as MDBCardGroup };
