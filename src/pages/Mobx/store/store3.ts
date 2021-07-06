import React from 'react'
import { makeObservable, makeAutoObservable, action, observable, computed } from 'mobx'

class Store3 {
  public price: number = 0
  public amount: number = 1
  constructor() {
    makeObservable(this, {
      price: observable,
      amount: observable,
      total: computed
    })
  }

  get total() {
    console.log('computing……')
    return this.price * this.amount
  }
}

export default new Store3()
