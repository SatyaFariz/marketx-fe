import { Component } from 'react'
import ErrorScreen from './Screens/ErrorScreen'
import Logo from '../logo.svg'

const LoadingView = () => {
  return (
    <div style={{
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <img
        alt='applogo'
        src={Logo}
      />
    </div>
  )
}

const defaultStates = {
  title: null,
  component: null,
  error: null
}

class AppRenderer extends Component {
  state = defaultStates
  
  componentDidUpdate() {
    if (this.state.title) {
      window.document.title = this.state.title;
    }
 /*   gtag('config', window.config.gaTrackingId, {
      page_title: this.state.title,
      page_location: window.location.href,
      page_path: `${window.location.pathname}${window.location.search}`,
    });*/
  }

  componentDidCatch(error) {
 //   gtag('event', 'exception', { description: error.message, fatal: false });
    this.setState({ ...defaultStates, error });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.component !== nextState.component ||
      this.state.error !== nextState.error ||
      this.state.title !== nextState.title
    );
  }

  renderRoute = (route, cb) => {
    this.setState({ ...defaultStates, ...route }, cb);
  };

  render() {
    return /*this.state.error*/ false ? (
      <ErrorScreen error={this.state.error} />
    ) : this.state.component ? (
      this.state.component
    ) : <LoadingView/>;
  }
}

export default AppRenderer