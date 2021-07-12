import SearchBar from '../../Components/SearchBar'
import Categories from '../../Components/Categories'
import LatestProductsList from '../../Components/LatestProductsList'

const Component = props => {
  return (
    <>
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

      <SearchBar/>
    </>
  )
}

export default Component