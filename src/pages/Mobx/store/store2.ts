import React from 'react'
import { makeObservable, makeAutoObservable, action, observable, computed } from 'mobx'

// makeAutoObservable写法
function Store2() {
  return makeAutoObservable({
    value: 0,
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

// makeObservable写法
function Store2New() {
  return makeObservable(
    {
      value: 0,
      get double() {
        return this.value * 2
      },
      increment() {
        this.value++
      },
      reset() {
        this.value = 0
      }
    },
    {
      value: observable,
      double: computed,
      increment: action,
      reset: action
    }
  )
}

// observable使用方法
function Store2New2() {
  return observable(
    {
      value: 0,
      get double() {
        return this.value * 2
      },
      increment() {
        this.value++
      },
      reset() {
        this.value = 0
      }
    },
    {
      value: observable,
      double: computed,
      increment: action,
      reset: action
    }
  )
}

export default Store2New2()

/**
 * export default Store2
 * 输出一个函数变量，那每次Store2()都是不同执行，
 * 无法保证store的唯一性
 */
