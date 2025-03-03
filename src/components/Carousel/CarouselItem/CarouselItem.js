import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CarouselContext } from '../Carousel';

class CarouselItem extends Component {
  moveForward = () => {
    this.style = {
      position: 'absolute',
      left: '100%'
    };
  };

  moveBackwards = () => {
    this.style = {
      position: 'absolute',
      left: '-100%'
    };
  };

  makeVisible = () => {
    this.style = {
      left: '0'
    };
  };

  static defaultProps = {
    tag: 'div'
  };

  static contextType = CarouselContext;

  render() {
    let { active, children, className, itemId, tag: Tag, ...attributes } = this.props;
    const { activeItem, slide } = this.context;
    itemId = parseInt(itemId, 10);

    const classes = classNames(
      'carousel-item',
      {
        'active carousel-slide-item': slide,
        active: !slide && itemId === activeItem
      },
      className
    );

    const slideIndex = activeItem - itemId;

    if (slide) {
      if (slideIndex < 0) {
        this.moveForward();
      } else if (slideIndex > 0) {
        this.moveBackwards();
      } else {
        this.makeVisible();
      }
    } else {
      this.makeVisible();
    }

    return (
      <Tag data-test='carousel-item' {...attributes} className={classes} style={this.style}>
        {children}
      </Tag>
    );
  }
}

CarouselItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  itemId: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default CarouselItem;
export { CarouselItem as MDBCarouselItem };
