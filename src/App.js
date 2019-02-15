import React, { Component, useState } from 'react'
import './App.scss'
import Layout from './components/Layout'
import { Provider } from 'mobx-react'
import counterStore from './stores/CounterStore'

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <Provider counterStore={counterStore}>
      <Layout />
    </Provider>
  )
}

export default App
