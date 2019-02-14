import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Button } from '@blueprintjs/core'

@observer
class Counter extends Component {
  @observable counter = 0

  onIncrement = () => {
    this.counter++
  }

  onDecrement = () => {
    this.counter--
  }

  render() {
    return (
      <div>
        <h1>{this.counter}</h1>

        <Button onClick={this.onIncrement} large intent='primary' icon='plus'>
          Increment
        </Button>
        <Button onClick={this.onDecrement} large intent='danger' icon='minus'>
          Decrement
        </Button>
      </div>
    )
  }
}

export default Counter
