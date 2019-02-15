import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { Button } from '@blueprintjs/core'
import DevTools from 'mobx-react-devtools'
// import routerStore from '../stores/RouterStore'
// import withRouterStore from '../HOC/WithRouterStore'

@inject('counterStore')
@observer
class Decorator extends Component {
  render() {
    return (
      <div>
        <DevTools />
        <h1>{this.props.counterStore.getCounter}</h1>

        <Button
          onClick={this.props.counterStore.increment}
          large
          intent='primary'
          icon='plus'
        >
          Increment
        </Button>
        <Button
          onClick={this.props.counterStore.decrement}
          large
          intent='danger'
          icon='minus'
        >
          Decrement
        </Button>
      </div>
    )
  }
}

export default Decorator
