import { useEffect } from 'react'

const useDisablePullToRefresh = (disable) => {
  useEffect(() => {
    if(typeof disable === 'boolean') {
      if(disable) {
        document.documentElement.style.overscrollBehavior = 'contain'
      } else {
        document.documentElement.style = undefined
      }
    }
  }, [disable])
}

export default useDisablePullToRefresh