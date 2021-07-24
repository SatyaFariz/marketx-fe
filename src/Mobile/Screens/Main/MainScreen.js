import '../../../App.css';
import BottomNav from '../../Components/BottomNav'
import ExploreTab from './ExploreTab/ExploreTab'
import RentedTab from './RentedTab/RentedTab'
import NotificationTab from './NotificationTab/NotificationTab'
import ProfileTab from './ProfileTab/ProfileTab'
import useAppContext from '../../hooks/useAppContext'
import { useState } from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

function App(props) {
  const { queryParams } = useAppContext()
  const tab = queryParams.tab ? parseInt(queryParams.tab) : 0
  const [index, setIndex] = useState(0)
  const onIndexChange = index => setIndex(index)
  return (
    <>
      <ExploreTab 
        active={tab === 0} 
        categories={props.data.categories}
        featuredProducts={props.data.featuredProducts}
      />
      <RentedTab active={tab === 1}/>
      <NotificationTab active={tab === 2}/>
      <ProfileTab active={tab === 3}/>
      
      <BottomNav 
        me={props.data.me}
        onIndexChange={onIndexChange}
      />

    </>
  )
}

export default createFragmentContainer(App, {
  data: graphql`
    fragment MainScreen_data on Query {
      me {
        id,
        ...BottomNav_me
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
