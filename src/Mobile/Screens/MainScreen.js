import logo from '../../logo.svg';
import '../../App.css';
import FixedAddressBar from '../Components/FixedAddressBar'
import SearchBar from '../Components/SearchBar'
import BottomNav from '../Components/BottomNav'
import Categories from '../Components/Categories'
import LatestProductsList from '../Components/LatestProductsList'

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
        <LatestProductsList/>
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
