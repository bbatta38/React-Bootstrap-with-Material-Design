import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link as LinkRouter } from 'react-router-dom';
import Waves from '../Waves';

const Link = props => {
  const cursorPos = {};
  // const [cursorPos, setCursorPos] = useState({});
  const { active = false, children, className = '', disabled = false, link, to, ...attributes } = props;
  const classes = classNames('nav-link', disabled ? 'disabled' : 'Ripple-parent', active && 'active', className);

  const handleClick = e => {
    if (!disabled) {
      // e.stopPropagation();
      // const cursorPos = {
      //   top: e.clientY,
      //   left: e.clientX,
      //   time: Date.now()
      // };
      // setCursorPos(cursorPos);
    }
  };

  return (
    <LinkRouter
      data-test='link-router'
      className={classes}
      onMouseUp={handleClick}
      onTouchStart={handleClick}
      to={to}
      {...attributes}
    >
      {children}
      {disabled ? false : <Waves cursorPos={cursorPos} />}
    </LinkRouter>
  );
};

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string
};

export default Link;
export { Link as MDBLink };
