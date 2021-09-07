import { createFragmentContainer } from 'react-relay'
import { DIVIDER_COLOR } from '../Constants'
import { ButtonBase } from '@material-ui/core'
import Color from '../Constants/Color'
import graphql from 'babel-plugin-relay/macro'
import Link from '../Components/Link'
import useAppContext from '../hooks/useAppContext'
import { useState, useEffect } from 'react'

const Component = props => {
  const { queryParams, pathname } = useAppContext()
  const { tab } = queryParams
  const { categories } = props
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
        <ButtonBase
          component={Link}
          href='/'
          replace
          disableRipple
        >
          <div style={{
            width: 118,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}>
            <img
              alt="Buy"
              src="https://www.cumi.id/static/media/categoryClothingBeauty.f3b1100b.svg"
              style={{
                height: 70,
                width: 70,
                marginBottom: 10,
                borderRadius: '50%',
                border: currentTab === -1 ? `2px solid ${Color.link}` : undefined
              }}
            />
            <span style={{ textAlign: 'center' }}>Beli</span>
          </div>
        </ButtonBase>
        {categories.map((item, i) => {
          if(['rental_product', 'service'].includes(item.listingType) && item.level === 1) {
            return (
              <ButtonBase
                key={i}
                component={Link}
                replace
                href={`?tab=${i}`}
                disableRipple
              >
                <div key={i} style={{
                  width: 118,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center'
                }}>
                  <img
                    alt={item.name}
                    src={item.icon?.url}
                    style={{
                      height: 70,
                      width: 70,
                      marginBottom: 10,
                      borderRadius: '50%',
                      border: currentTab === i ? `2px solid ${Color.link}` : undefined
                    }}
                  />
                  <span style={{ textAlign: 'center' }}>{item.name}</span>
                </div>
              </ButtonBase>
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
            <ButtonBase 
              href={`/category/${item.id}`} 
              key={item.id}
              component={Link}
              disableRipple
              style={{
                height: '100%'
              }}
            >
              <div key={i} style={{
                width: 118,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBottom: 15
              }}>
                <img
                  alt={item.name}
                  src={item.icon?.url}
                  style={{
                    height: 70,
                    width: 70,
                    marginBottom: 10
                  }}
                />
                <span style={{ textAlign: 'center' }}>{item.name}</span>
              </div>
            </ButtonBase>
          )
        })}
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
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