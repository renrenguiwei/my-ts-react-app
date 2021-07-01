import React, { useCallback } from 'react'
import useScroll from './useScroll'

/**
 * 无效： document.body.scrollTop
 * 有效：
 * document.documentElement.scrollTop
 * window.pageYOffset
 */
export default function ScrollTop() {
  const { y } = useScroll()
  console.log('scroll', y)
  const goTop = useCallback(() => {
    document.documentElement.scrollTop = 0
  }, [])

  if (y > 300) {
    return (
      <button
        style={{
          position: 'fixed',
          right: '10px',
          bottom: '10px'
        }}
        onClick={goTop}
      >
        Back to Top
      </button>
    )
  }
  return null
}
