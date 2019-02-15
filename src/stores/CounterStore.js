import { action, computed, observable } from 'mobx'

class CounterStore {
  @observable counter = 0

  @action increment = () => this.counter++

  @action decrement = () => this.counter--

  @computed get getCounter() {
    return this.counter
  }
}

const counterStore = new CounterStore()
export default counterStore
