import { IconButton } from '@material-ui/core'
import { IoChevronBackSharp } from 'react-icons/io5'
import useAppContext from '../hooks/useAppContext'

const Component = ({ onClick, color }) => {
  const { history } = useAppContext()
  const goBack = () => {
    if(history.length <= 2) {
      history.replace('/')
    } else if(onClick) {
      onClick()
    } else {
      history.goBack()
    }
  }

  return (
    <IconButton 
    onClick={goBack}
    style={{
      zIndex: 1
    }}>
    <IoChevronBackSharp size={32} color={color || "black"}/>
    </IconButton>
  )
}

export default Component