import { createFragmentContainer } from 'react-relay'
import { DIVIDER_COLOR } from '../Constants'
import graphql from 'babel-plugin-relay/macro'
import useAppContext from '../hooks/useAppContext'
import { useState, useEffect } from 'react'
import CategoryItem from './CategoryItem'

const Component = props => {
  const { queryParams, pathname } = useAppContext()
  const { tab } = queryParams
  const { categories, me } = props
  const [currentTab, setCurrentTab] = useState(tab ? parseInt(tab, 10) : -1)

  useEffect(() => {
    if(pathname === '/') {
      setCurrentTab(tab ? parseInt(tab, 10) : -1)
    }
  }, [pathname, tab])

  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '20px 0',
      }}>
        <CategoryItem
          href='/'
          category={{
            name: 'Beli',
            icon: {
              url: 'https://www.cumi.id/static/media/categoryClothingBeauty.f3b1100b.svg'
            }
          }}
          me={me}
          highlight={currentTab === -1}
        />
        
        {categories.map((item, i) => {
          if(['rental_product', 'service'].includes(item.listingType) && item.level === 1) {
            return (
              <CategoryItem
                key={item.id}
                href={`?tab=${i}`}
                category={item}
                me={me}
                highlight={currentTab === i}
              />
            )
          } else {
            return null
          }
        })}
      </div>

      <div style={{
        borderBottom: `1px solid ${DIVIDER_COLOR}`,
        margin: '0 20px',
        marginBottom: 20
      }}/>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'flex-start'
      }}>
        {(currentTab === -1 ? categories : categories[currentTab].children).map((item, i) => {
          if(item.level > 2 || !item.isPublished || (currentTab === -1 && item.level > 1) || ['rental_product', 'service'].includes(item.listingType)) return null
          return (
            <CategoryItem
              key={item.id}
              href={`/category/${item.id}`} 
              category={item}
              me={me}
              style={{
                marginBottom: 15
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  me: graphql`
    fragment Categories_me on User {
      id,
      ...CategoryItem_me
    }
  `,
  categories: graphql`
    fragment Categories_categories on Category @relay(plural: true) {
      id,
      name,
      level,
      isPublished,
      listingType,
      icon {
        url
      },
      children {
        id,
        name,
        isPublished,
        level,
        icon {
          url
        }
      }
    }
  `
})