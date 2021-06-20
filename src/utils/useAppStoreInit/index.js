import { useState, useEffect } from 'react'
// import { AppStore } from "@chanjet/chanjet-h5-biz-components"

export default function useAppStoreInit() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // cc-h5-biz-common 初始化Store
    // AppStore.index1Store.ts()
    //   .ready()
    //   .then(data => {
    //     if (data === true) setReady(true)
    //   })
    setTimeout(() => {
      setReady(true)
    }, 3000)
  }, [])

  return ready
}
