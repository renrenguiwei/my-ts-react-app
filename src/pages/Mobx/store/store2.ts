import React from 'react'
import { makeObservable, makeAutoObservable, action, observable } from 'mobx'

function Store2() {
  return makeAutoObservable({
    value: 1,
    get double() {
      return this.value * 2
    },
    increment() {
      this.value++
    },
    reset() {
      this.value = 0
    }
  })
}

export default Store2()
/**
 * export default Store2
 * 输出一个函数变量，那每次Store2()都是不同执行，
 * 无法保证store的唯一性
 */
