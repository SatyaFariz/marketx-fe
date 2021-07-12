import '../../App.css';
import FixedAddressBar from '../Components/FixedAddressBar'
import BottomNav from '../Components/BottomNav'
import ExploreTab from './ExploreTab/ExploreTab'
import RentedTab from './RentedTab/RentedTab'
import NotificationTab from './NotificationTab/NotificationTab'
import ProfileTab from './ProfileTab/ProfileTab'
import { useState } from 'react'

function App() {
  const [index, setIndex] = useState(0)
  const onIndexChange = index => setIndex(index)
  return (
    <FixedAddressBar>
      <ExploreTab active={index === 0}/>
      <RentedTab active={index === 1}/>
      <NotificationTab active={index === 2}/>
      <ProfileTab active={index === 3}/>
      
      <BottomNav onIndexChange={onIndexChange}/>

    </FixedAddressBar>
  )
}

export default App;
