import React from 'react'
import { makeObservable, makeAutoObservable, action, observable } from 'mobx'

class Timer {
  public secondPassed: number = 0
  constructor() {
    makeObservable(this, {
      secondPassed: observable,
      increase: action,
      reset: action
    })
  }
  increase() {
    this.secondPassed += 1
  }

  reset() {
    this.secondPassed = 0
  }
}

export default new Timer()
