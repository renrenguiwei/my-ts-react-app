import React from 'react'
import storage from '@/utils/storage'
import { Button } from 'antd-mobile'

const Index = () => {
  const get = () => {
    const name = storage.getItem('name')
    console.log(name)
  }
  const set = () => {
    storage.setItem({
      name: 'name',
      value: 'claus wong',
      expires: '3000'
    })
  }
  const remove = () => {
    storage.removeItem('name')
  }
  const clear = () => {
    storage.clear()
  }

  return (
    <>
      <Button onClick={() => get()}>读取</Button>
      <Button onClick={() => set()}>设置</Button>
      <Button onClick={() => remove()}>删除</Button>
      <Button onClick={() => clear()}>清空</Button>
    </>
  )
}

export default Index
