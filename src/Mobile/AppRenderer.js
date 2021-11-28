import { Component } from 'react'
import ErrorPage from './Screens/ErrorPage'
import { LOGO_URL } from './Constants'

const LoadingView = () => {
  return (
    <div style={{
      backgroundColor: 'white',
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
        src={LOGO_URL}
        style={{
          width: '65%'
        }}
      />
    </div>
  )
}

class AppRenderer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      component: null,
      error: null
    }
  }
  
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
    this.setState({ error });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.component !== nextState.component ||
      this.state.error !== nextState.error ||
      this.state.title !== nextState.title
    );
  }

  renderRoute = (route, cb) => {
    this.setState({ ...route }, cb);
  };

  render() {
    return /*this.state.error*/ false ? (
      <ErrorPage error={this.state.error} />
    ) : this.state.component ? (
      this.state.component
    ) : (
      <div>
        {this.props.initialComponent ?
        <div style={{ opacity: 0 }}>
          {this.props.initialComponent}
        </div>
        :
        <LoadingView/>
        }
      </div>
    )
  }
}

export default AppRenderer