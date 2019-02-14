import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Button } from '@blueprintjs/core'

@observer
class Decorator extends Component {
  @observable Deco = 0

  onIncrement = () => {
    this.Deco++
  }

  onDecrement = () => {
    this.Deco--
  }

  render() {
    return (
      <div>
        <h1>{this.Deco}</h1>

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

export default Decorator
