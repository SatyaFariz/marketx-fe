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

    if(typeof disable === 'undefined') {
      document.documentElement.style.overscrollBehavior = 'contain'
      return () => {
        document.documentElement.style = undefined
      }
    }
  }, [disable])
}

export default useDisablePullToRefresh