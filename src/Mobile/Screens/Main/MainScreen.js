import '../../../App.css';
import BottomNav from '../../Components/BottomNav'
import ExploreTab from './ExploreTab/ExploreTab'
import RentedTab from './RentedTab/RentedTab'
import NotificationTab from './NotificationTab/NotificationTab'
import AccountTab from './AccountTab/AccountTab'
import useAppContext from '../../hooks/useAppContext'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { useState, useEffect } from 'react'

function App(props) {
  const { categories, featuredProducts, me } = props.data
  const { queryParams, pathname } = useAppContext()
  const tab = queryParams.tab ? parseInt(queryParams.tab) : 0
  const [currentTab, setCurrentTab] = useState(tab)

  useEffect(() => {
    if(pathname === '/') {
      setCurrentTab(tab)
    }
  }, [tab, pathname])
  return (
    <>
      {categories && featuredProducts &&
      <ExploreTab 
        active={currentTab === 0} 
        categories={categories}
        featuredProducts={featuredProducts}
        me={me}
      />
      }
      {/* <RentedTab active={currentTab === 1}/>
      <NotificationTab active={currentTab === 2}/>
      
      <AccountTab 
        active={currentTab === 3}
        me={me}
      /> */}
      
      {/* <BottomNav 
        me={me}
      /> */}

    </>
  )
}

export default createFragmentContainer(App, {
  data: graphql`
    fragment MainScreen_data on Query {
      me {
        id,
        ...BottomNav_me,
        ...ExploreTab_me,
        ...AccountTab_me
      }
      categories {
        id,
        ...ExploreTab_categories
      },
      featuredProducts {
        id,
        ...ExploreTab_featuredProducts
      }
    }
  `
});
