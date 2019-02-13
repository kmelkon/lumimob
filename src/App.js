import React, { Component, useState } from 'react'
import './App.scss'
import { Button, Dialog } from '@blueprintjs/core'
import Layout from './components/Layout'

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <Layout>
      <Button
        intent='primary'
        icon='build'
        minimal
        large
        rightIcon='draw'
        text='LITERALLY DO NOTHING'
        type='button'
        onClick={() => setOpen(true)}
      >
        {/* <Icon icon='build' iconSize='20' /> */}
      </Button>
      <Dialog
        isOpen={open}
        autoFocus='true'
        title='Why would you click a button that does nothing though? 🤦🏻‍'
        usePortal='true'
        onClose={() => setOpen(false)}
        canEscapeKeyClose='true'
      >
        <h5>Generic dialog stuff</h5>
        <Button intent='primary'>Yep, and a button</Button>
      </Dialog>
    </Layout>
  )
}

export default App
