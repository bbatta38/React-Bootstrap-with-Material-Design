import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Waves from '../../Waves';
import Mask from '../../Mask';
import View from '../../View';

const CardImage = props => {
  const cursorPos = {};
  // const [cursorPos, setCursorPos] = useState({});

  const handleClick = e => {
    // Get Cursor Position
    // const cursorPos = {
    //   top: e.clientY,
    //   left: e.clientX,
    //   time: Date.now()
    // };
    // setCursorPos(cursorPos);
  };

  const {
    cascade = false,
    className,
    hover = false,
    overlay = 'white-slight',
    src,
    tag = 'img',
    top,
    waves = true,
    zoom = false,
    ...attributes
  } = props;

  const classes = classNames(top && 'card-img-top', className);

  const Tag = tag;

  const innerContent = <Tag data-test='card-image' src={src} {...attributes} className={classes} />;

  if (src) {
    return (
      <View zoom={zoom} hover={hover} cascade={cascade}>
        <div className='Ripple-parent' onMouseDown={handleClick} style={{ touchAction: 'unset' }}>
          {innerContent}
          <Mask overlay={overlay} />
          {waves && <Waves cursorPos={cursorPos} />}
        </div>
      </View>
    );
  }
  return <div>{innerContent}</div>;
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
