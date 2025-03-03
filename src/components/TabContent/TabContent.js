import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { omit } from '../utils';

const propTypes = {
  activeItem: PropTypes.any,
  className: PropTypes.string,
  tabId: PropTypes.any
};

const TabContentContext = createContext();

class TabContent extends React.Component {
  state = {
    activeItem: this.props.activeItem
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return prevState.activeItem !== nextProps.activeItem ? { activeItem: nextProps.activeItem } : null;
  }

  render() {
    const { className } = this.props;
    const { activeItem } = this.state;

    const attributes = omit(this.props, Object.keys(propTypes));
    const classes = classNames('tab-content', className);
    return (
      <TabContentContext.Provider value={{ activeItemId: activeItem }}>
        <div data-test='tabContent' {...attributes} className={classes} />
      </TabContentContext.Provider>
    );
  }
}

TabContent.propTypes = propTypes;

export default TabContent;
export { TabContent as MDBTabContent, TabContentContext };
