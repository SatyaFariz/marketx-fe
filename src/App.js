import React, { Component } from 'react'
import { QueryRenderer } from 'react-relay'
import qs from 'query-string'
import { MuiThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline'

import router from './Mobile/router'
import theme from './theme'
import AppRenderer from './Mobile/AppRenderer'
import AppContext from './Mobile/AppContext'
import { LinearProgress } from '@material-ui/core'

class App extends Component {
  
  state = {
    query: null,
    variables: null,
    render: () => <AppRenderer ref={this.rendererRef} initialComponent={this.props.initialComponent}/>,
    relay: this.props.createRelay(),
    queryParams: {},
    pathname: '',
    loading: true,
    createRelay: null
  };

  childContext = {
    history: this.props.history,
    reset: () => {
      this.setState({ relay: this.props.createRelay() });
      this.props.history.replace(this.props.history.location);
      return new Promise(resolve => {
        this.onRenderComplete = resolve;
      });
    },
  };

  rendererRef = React.createRef();

  resetEnvironment = (options) => {
    options?.redirect && this.props.history.replace(options.redirect)
    this.setState({ relay: this.props.createRelay() })
  }

  getChildContext() {
    return this.childContext;
  }

  componentDidMount() {
    import("./mobile.css")
    import('swiper/swiper.min.css')
    
    const { history } = this.props;
    this.unlisten = history.listen(this.renderLocation);
    this.renderLocation(history.location);
    // disable context menu
    if(this.props.isMobile)
      document.oncontextmenu = () => false
  }

  componentWillUnmount() {
    this.unlisten();
  }

  renderLocation = location => {
    const { history } = this.props
    const queryParams = qs.parse(location.search)
    this.setState({ queryParams, pathname: location.pathname })
    router
      .resolve({
        query: queryParams,
        pathname: location.pathname || '',
        fetchQuery: this.fetchQuery,
      })
      .then(route => {
        if (route.redirect) {
          history.push(route.redirect);
        } else {
          this.renderRoute(route);
        }
      });
    
  };

  fetchQuery = (query, variables) => {
    return new Promise((resolve, reject) => {
      this.setState({
        loading: true,
        query,
        variables,
        render: ({ error, props, retry }) => {
          if (error) {
            const err = new Error(error.message);
            err.code = error.code;
            reject(err);
          } else if (props !== null) {
            resolve(props);
          }
          return <AppRenderer ref={this.rendererRef}/>;
        },
      });
    });
  };

  onRenderComplete = () => {
    // end progress bar here
    this.setState({ loading: false })
  }

  renderRoute = route => {
    this.rendererRef.current.renderRoute(route, this.onRenderComplete);
  };

  render() {
    const { relay, query, variables, render, loading } = this.state;

    return (
      <AppContext.Provider 
        value={{
          queryParams: this.state.queryParams,
          pathname: this.state.pathname,
          history: this.props.history,
          environment: relay,
          resetEnvironment: this.resetEnvironment,
          isMobile: this.props.isMobile,
          isProduction: process.env.REACT_APP_ENV === 'production'
        }}
      >
        <MuiThemeProvider theme={theme}>
          <div style={{
            position: 'relative'
          }}>
            {loading &&
            <div style={{
              position: 'absolute',
              left: 0,
              right: 0,
              zIndex: 99999999999999999999
            }}>
              <LinearProgress/>
            </div>
            }
            <QueryRenderer
              fetchPolicy="store-and-network"
              environment={relay}
              query={query}
              variables={variables || {}}
              render={render}
            />
          </div>
        </MuiThemeProvider>
      </AppContext.Provider>
    );
  }
}

export default App;