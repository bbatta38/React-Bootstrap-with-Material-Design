import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Waves from '../Waves';

const View = props => {
  const cursorPos = {};
  // const [cursorPos, setCursorPos] = useState({});

  const handleClick = e => {
    // const cursorPos = {
    //   top: e.clientY,
    //   left: e.clientX,
    //   time: Date.now()
    // };
    // setCursorPos(cursorPos);
  };
  const {
    cascade = false,
    children,
    className = '',
    fixed,
    hover = false,
    rounded = false,
    src = '',
    tag: Tag = 'div',
    waves = false,
    zoom = false,
    ...attributes
  } = props;

  const classes = classNames(
    'view',
    cascade && 'view-cascade',
    className,
    hover && 'overlay',
    rounded && 'rounded',
    waves ? 'Ripple-parent' : false,
    zoom && 'zoom'
  );

  const viewStyle = src
    ? {
        backgroundAttachment: fixed ? 'fixed' : null,
        backgroundImage: `url("${src}")`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh'
      }
    : {};

  return (
    <Tag
      {...attributes}
      className={classes}
      data-test='view'
      onMouseDown={handleClick}
      onTouchStart={handleClick}
      style={viewStyle}
    >
      {children}
      {waves && <Waves cursorPos={cursorPos} />}
    </Tag>
  );
};

View.propTypes = {
  cascade: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  rounded: PropTypes.bool,
  src: PropTypes.string,
  tag: PropTypes.string,
  waves: PropTypes.bool,
  zoom: PropTypes.bool
};

export default View;
export { View as MDBView };
