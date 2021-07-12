import logo from './logo.svg';
import './App.css';
import FixedAddressBar from './Mobile/Components/FixedAddressBar'
import SearchBar from './Mobile/Components/SearchBar'
import BottomNav from './Mobile/Components/BottomNav'
import Categories from './Mobile/Components/Categories'

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <FixedAddressBar>
      <div style={{
        overflow: 'scroll',
        height: '100%',
        marginBottom: 68
      }}>
        <img
          src="https://www.lesitedelasneaker.com/wp-content/images/2019/11/air-jordan-1-high-bloodline-banner.jpg"
          alt="test"
          style={{
            // height: 200,
            width: '100%'
          }}
        />
        <Categories/>
      </div>
      
      {/* <div style={{
        height: 64,
        width: '100%',
        position: 'absolute',
        backgroundColor: 'white'
      }}>

      </div>
      <div style={{
        backgroundColor: 'blue',
        marginTop: 64,
        height: 10000,
        
      }}>
        PPP
      </div> */}
      <SearchBar/>
      <BottomNav/>

    </FixedAddressBar>
  )
}

export default App;
