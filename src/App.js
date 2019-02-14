import React, { Component, useState } from 'react'
import './App.scss'
import Layout from './components/Layout'

const App = () => {
  const [open, setOpen] = useState(false)

  return <Layout />
}

export default App
