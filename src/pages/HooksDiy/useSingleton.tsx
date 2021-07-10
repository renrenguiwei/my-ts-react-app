import { useRef } from 'react'

/**
 * 自定义hook只会被执行一次，模仿constructor
 */
export function useSingleton(callback: Function) {
  const called = useRef(false)
  if (called.current) return
  callback()
  called.current = true
}
