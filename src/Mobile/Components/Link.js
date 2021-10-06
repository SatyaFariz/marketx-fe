import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../AppContext'

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
  };

  static contextType = AppContext

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (event.defaultPrevented === true) {
      return;
    }

    event.preventDefault();
    const href = event.currentTarget.getAttribute('href')
    if(this.props.replace)
      this.context.history.replace(href);
    else
      this.context.history.push(href);
  };

  render() {
    return <a {...this.props} onClick={this.handleClick} />;
  }
}

export default Link;
