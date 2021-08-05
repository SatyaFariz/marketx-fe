import SearchBar from '../../../Components/SearchBar'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../../Constants'
import Categories from '../../../Components/Categories'
import FeaturedProductsList from '../../../Components/FeaturedProductsList'
import Link from '../../../Components/Link'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { Close, Delete } from '@material-ui/icons'
import { IconButton, CircularProgress } from '@material-ui/core'
import { IoSearchOutline, IoPersonOutline } from 'react-icons/io5'

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
        {/* <img
          src="https://www.lesitedelasneaker.com/wp-content/images/2019/11/air-jordan-1-high-bloodline-banner.jpg"
          alt="test"
          style={{
            // height: 200,
            width: '100%'
          }}
        /> */}
        <div style={{
          // height: 56,
          borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`,
          // display: 'flex',
          // // flexDirection: 'row',
          // justifyContent: 'space-between',
          // alignItems: 'center',
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          zIndex: 999999
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <img
              src="https://res.cloudinary.com/tuanrumah/image/upload/v1628197566/amazon_logo_500500.png"
              alt="image"
              style={{
                height: 40,
                marginLeft: 10
              }}
            />
          </div>
          

          <div style={{
            padding: '0 15px',
            margin: '5px 0'
          }}>
            <div style={{
              backgroundColor: '#f1f1f1',
              height: 40,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <IconButton onClick={() => {}}>
              <IoSearchOutline style={{ color: 'black' }}/>
            </IconButton>
            </div>
          </div>
        </div>
        <Categories categories={categories}/>
        <FeaturedProductsList featuredProducts={featuredProducts}/>
      </div>

      <div>
        <Link href='/login'>
          Login
        </Link>
      </div>
{/* 
      <SearchBar/> */}
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