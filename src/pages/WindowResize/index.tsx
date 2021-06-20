import { useEffect, useState } from 'react'

type SizeType = 'large' | 'small'

const getSize = () => {
  return window.innerWidth > 1000 ? 'large' : 'small'
}
const useWindowSize = (): SizeType => {
  const [size, setSize] = useState(getSize())
  useEffect(() => {
    const handler = () => {
      console.log('size=====>', getSize(), window.innerWidth)
      setSize(getSize())
    }
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])
  return size as SizeType
}

export default useWindowSize
