import '../../../App.css';
import BottomNav from '../../Components/BottomNav'
import ExploreTab from './ExploreTab/ExploreTab'
import RentedTab from './RentedTab/RentedTab'
import NotificationTab from './NotificationTab/NotificationTab'
import ProfileTab from './ProfileTab/ProfileTab'
import useAppContext from '../../hooks/useAppContext'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

function App(props) {
  const { categories, featuredProducts, me } = props.data
  const { queryParams } = useAppContext()
  const tab = queryParams.tab ? parseInt(queryParams.tab) : 0
  return (
    <>
      {categories && featuredProducts &&
      <ExploreTab 
        active={tab === 0} 
        categories={categories}
        featuredProducts={featuredProducts}
      />
      }
      <RentedTab active={tab === 1}/>
      <NotificationTab active={tab === 2}/>
      <ProfileTab 
        active={tab === 3}
        me={me}
      />
      
      <BottomNav 
        me={me}
      />

    </>
  )
}

export default createFragmentContainer(App, {
  data: graphql`
    fragment MainScreen_data on Query {
      me {
        id,
        ...BottomNav_me,
        ...ProfileTab_me
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
