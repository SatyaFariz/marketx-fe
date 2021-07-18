import SearchBar from '../../../Components/SearchBar'
import Categories from '../../../Components/Categories'
import FeaturedProductsList from '../../../Components/FeaturedProductsList'
import Link from '../../../Components/Link'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const Component = props => {
  const { active, categories, featuredProducts } = props
  console.log('FEATURED PRODUCTS', featuredProducts)
  return (
    <div style={{
      display: active ? undefined : 'none',
      marginBottom: 68
    }}>
      <div style={{
        
      }}>
        <img
          src="https://www.lesitedelasneaker.com/wp-content/images/2019/11/air-jordan-1-high-bloodline-banner.jpg"
          alt="test"
          style={{
            // height: 200,
            width: '100%'
          }}
        />
        <Categories categories={categories}/>
        <FeaturedProductsList featuredProducts={featuredProducts}/>
      </div>

      <div>
        <Link href='/login'>
          Login
        </Link>
      </div>

      <SearchBar/>
    </div>
  )
}

export default createFragmentContainer(Component, {
  categories: graphql`
    fragment ExploreTab_categories on Category @relay(plural: true) {
      id,
      ...Categories_categories
    }
  `,
  featuredProducts: graphql`
    fragment ExploreTab_featuredProducts on Product @relay(plural: true) {
      id,
      ...FeaturedProductsList_featuredProducts
    }
  `
})