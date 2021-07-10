import React from 'react'
import useWindowSize from '@/pages/UseWindowSize'

const withWindowSize = (Comp: any) => {
  return (props: any) => {
    const windowSize = useWindowSize()
    return <Comp windowSize={windowSize} {...props} />
  }
}
export default withWindowSize
