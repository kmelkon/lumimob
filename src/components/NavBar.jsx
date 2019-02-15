import React from 'react'
import { NavLink, Link, Switch, Route } from 'react-router-dom'
import { Button } from '@blueprintjs/core'
import '../styles/navbar.scss'

const NavBar = props => (
  <>
    <nav className='nav'>
      <NavLink exact activeClassName='active' className='nav-link' to='/'>
        Home AKA Lumi
      </NavLink>
      <NavLink activeClassName='active' className='nav-link' to='/counter'>
        Counter
      </NavLink>
      <NavLink activeClassName='active' className='nav-link' to='/decorator'>
        Counter+Decorator
      </NavLink>
    </nav>
    <div className='call-to-actions'>
      <Button minimal intent='primary'>
        Import Log
      </Button>
      <Button minimal intent='primary'>
        Users List
      </Button>
    </div>
  </>
)

export default NavBar
