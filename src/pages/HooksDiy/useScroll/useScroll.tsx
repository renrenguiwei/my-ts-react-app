import { useState, useEffect } from 'react'

const getPosition = (document: any) => {
  return {
    x: document.documentElement.scrollLeft,
    y: document.documentElement.scrollTop
  }
}

const useScroll = () => {
  const [position, setPosition] = useState(getPosition(document))

  useEffect(() => {
    const handler = () => {
      setPosition(getPosition(document))
    }
    document.addEventListener('scroll', handler)
    return () => {
      document.removeEventListener('scroll', handler)
    }
  }, [])
  return position
}

export default useScroll
