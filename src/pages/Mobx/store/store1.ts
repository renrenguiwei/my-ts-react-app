import React from 'react'
import { makeAutoObservable } from 'mobx'

class Timer {
  public secondPassed: number = 0
  constructor() {
    makeAutoObservable(this)
  }
  increase() {
    this.secondPassed += 1
  }

  reset() {
    this.secondPassed = 0
  }
}

export default new Timer()
