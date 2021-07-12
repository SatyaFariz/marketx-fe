import logo from '../../logo.svg';
import '../../App.css';
import FixedAddressBar from '../Components/FixedAddressBar'
import SearchBar from '../Components/SearchBar'
import BottomNav from '../Components/BottomNav'
import Categories from '../Components/Categories'
import LatestProductsList from '../Components/LatestProductsList'
import ExploreTab from './ExploreTab/ExploreTab'

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
      <ExploreTab/>
      
      <BottomNav/>

    </FixedAddressBar>
  )
}

export default App;
