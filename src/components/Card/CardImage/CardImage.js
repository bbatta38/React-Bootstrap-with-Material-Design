import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardImage = props => {
  const {
    cascade = false,
    children,
    className,
    hover = false,
    overlay = 'white-slight',
    src,
    tag: Tag = 'img',
    top,
    waves = true,
    zoom = false,
    ...attributes
  } = props;

  const classes = classNames(
    'card-img',
    top && 'card-img-top',
    cascade && 'view view-cascade overlay',
    hover && 'overlay',
    zoom && 'zoom',
    waves && 'Ripple-parent',
    className
  );

  const innerContent = overlay ? <div className={`mask ${overlay}`}>{children}</div> : children;

  return (
    <Tag {...attributes} className={classes} src={src}>
      {innerContent}
    </Tag>
  );
};

CardImage.propTypes = {
  cascade: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  hover: PropTypes.bool,
  overlay: PropTypes.string,
  src: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
  waves: PropTypes.bool,
  zoom: PropTypes.bool
};

export default CardImage;
export { CardImage as MDBCardImage };
