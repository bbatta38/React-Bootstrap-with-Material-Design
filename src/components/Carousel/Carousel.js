import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CarouselControl from './CarouselControl';
import CarouselIndicator from './CarouselIndicator';
import CarouselIndicators from './CarouselIndicators';
import './Carousel.css';

const CarouselContext = createContext();
class Carousel extends Component {
  state = {
    activeItem: this.props.activeItem,
    initialLength: this.props.length,
    srcArray: [],
    swipeAvailable: true,
    initialX: null,
    initialY: null
  };

  carouselRef = React.createRef();

  static defaultProps = {
    interval: 6000,
    mobileGesture: true,
    onHoverStop: true,
    showControls: true,
    showIndicators: true,
    tag: 'div'
  };

  componentDidMount() {
    const { interval, thumbnails, length } = this.props;
    if (interval === false) {
      return;
    }
    this.cycleInterval = setInterval(this.next, interval);

    // get images src atr
    if (thumbnails) {
      const CarouselItemsArray = this.carouselRef.current.querySelectorAll('.carousel-item img');

      const srcArray = Array.prototype.map.call(CarouselItemsArray, item => item.src);
      this.setState({ ...this.state, srcArray });
    }

    this.setState({ initialLength: length });
  }

  componentDidUpdate(prevProps, prevState) {
    const { length } = this.props;
    const initialLength = length;

    if (prevState.initialLength !== length) {
      this.setState({ initialLength });
    }
  }

  componentWillUnmount() {
    const { interval } = this.props;
    if (interval === false) {
      return;
    }
    this.clearCycleIntervalHandler();
  }

  clearCycleIntervalHandler = () => clearInterval(this.cycleInterval);

  swipeAvailableHandler = () => this.setState({ swipeAvailable: true });

  restartInterval = () => {
    const { interval } = this.props;

    if (interval !== false) {
      this.clearCycleIntervalHandler();
      this.cycleInterval = setInterval(this.next, interval);
    }
  };

  next = () => {
    const { activeItem, initialLength } = this.state;
    const nextIndex = activeItem + 1;
    const nextItem = nextIndex > initialLength ? 1 : nextIndex;

    this.goToIndex(nextItem);
  };

  prev = () => {
    const { activeItem, initialLength } = this.state;
    const prevIndex = activeItem - 1;
    const prevItem = prevIndex < 1 ? initialLength : prevIndex;

    this.goToIndex(prevItem);
  };

  goToIndex = item => {
    this.setState({
      ...this.state,
      activeItem: item
    });

    this.restartInterval();
  };

  startTouch = e => {
    const { mobileGesture } = this.props;
    if (mobileGesture !== false) {
      this.setState({
        initialX: e.touches[0].clientX,
        initialY: e.touches[0].clientY
      });
    }
  };

  moveTouch = e => {
    this.setState({
      swipeAvailable: false
    });

    const { initialX, initialY } = this.state;

    if (initialX === null || initialY === null) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const diffX = initialX - currentX;
    const diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally
      if (diffX > 0) {
        this.next();
      } else {
        this.prev();
      }
    }

    this.setState({
      initialX: null,
      initialY: null
    });
  };

  render() {
    const {
      activeItem,
      children,
      className,
      interval,
      mobileGesture,
      multiItem,
      onHoverStop,
      showControls,
      showIndicators,
      slide,
      tag: Tag,
      testimonial,
      thumbnails,
      ...attributes
    } = this.props;

    const { initialLength, srcArray, swipeAvailable, activeItem: stateActiveItem } = this.state;
    const ariaLabel = 'carousel';

    const classes = classNames(
      'carousel',
      multiItem ? 'carousel-multi-item' : 'carousel-fade',
      thumbnails ? 'carousel-thumbnails' : '',
      testimonial ? 'testimonial-carousel' : '',
      className
    );

    const CarouselIndicatorsArray = [];
    for (let i = 1; i <= initialLength; i++) {
      const { activeItem } = this.state;
      CarouselIndicatorsArray.push(
        <CarouselIndicator
          img={thumbnails ? srcArray[i - 1] : null}
          key={i}
          active={activeItem === i}
          onClick={() => this.goToIndex(i)}
        />
      );
    }

    const isMultiItem = !!multiItem;
    const isTestimonial = !!testimonial;

    return (
      <CarouselContext.Provider value={{ activeItem: stateActiveItem, length: initialLength, slide }}>
        <Tag
          data-test='carousel'
          ref={this.carouselRef}
          {...attributes}
          className={classes}
          aria-label={ariaLabel}
          onTouchStart={this.startTouch}
          onTouchMove={swipeAvailable ? this.moveTouch : null}
          onTouchEnd={this.swipeAvailableHandler}
          onMouseEnter={onHoverStop ? this.clearCycleIntervalHandler : null}
          onMouseLeave={onHoverStop ? this.restartInterval : null}
        >
          {showControls && multiItem && (
            <div className='controls-top'>
              <CarouselControl
                testimonial={isTestimonial}
                multiItem={isMultiItem}
                iconLeft
                className='btn-floating'
                direction='prev'
                role='button'
                onClick={this.prev}
              />
              <CarouselControl
                testimonial={isTestimonial}
                multiItem={isMultiItem}
                iconRight
                className='btn-floating'
                direction='next'
                role='button'
                onClick={this.next}
              />
            </div>
          )}
          {children}
          {showControls && !multiItem && (
            <>
              <CarouselControl
                testimonial={isTestimonial}
                multiItem={isMultiItem}
                direction='prev'
                role='button'
                onClick={this.prev}
              />
              <CarouselControl
                testimonial={isTestimonial}
                multiItem={isMultiItem}
                direction='next'
                role='button'
                onClick={this.next}
              />
            </>
          )}
          {showIndicators && <CarouselIndicators>{CarouselIndicatorsArray}</CarouselIndicators>}
        </Tag>
      </CarouselContext.Provider>
    );
  }
}

Carousel.propTypes = {
  activeItem: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  length: PropTypes.number,
  mobileGesture: PropTypes.bool,
  multiItem: PropTypes.bool,
  onHoverStop: PropTypes.bool,
  showControls: PropTypes.bool,
  showIndicators: PropTypes.bool,
  slide: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  testimonial: PropTypes.bool,
  thumbnails: PropTypes.bool
};

export default Carousel;
export { Carousel as MDBCarousel, CarouselContext };
