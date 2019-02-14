import React, { Component } from 'react'
import { observable, extendObservable } from 'mobx'
import { observer } from 'mobx-react'
import { Button } from '@blueprintjs/core'

class Counter extends Component {
  constructor() {
    super()

    extendObservable(this, {
      counter: 0,
    })
  }

  onIncrement = () => {
    this.counter++
  }

  onDecrement = () => {
    this.counter--
  }

  render() {
    return (
      <div>
        {this.counter}

        <button onClick={this.onIncrement} type='button'>
          Increment
        </button>
        <button onClick={this.onDecrement} type='button'>
          Decrement
        </button>
      </div>
    )
  }
}

export default observer(Counter)
