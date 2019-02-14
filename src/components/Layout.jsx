import React from 'react'
import { NavLink, Link, Switch, Route } from 'react-router-dom'
import Counter from './Counter'
import Decorator from './Decorator'

import '../styles/layout.scss'

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <h2>Home</h2>,
  },
  {
    path: '/counter',
    exact: true,
    main: Counter,
  },
  {
    path: '/decorator',
    exact: true,
    main: Decorator,
  },
]

const Layout = props => {
  return (
    <>
      <div className='layout'>
        <div className='header'>
          <nav className='nav'>
            <NavLink exact activeClassName='active' className='nav-link' to='/'>
              Home AKA Lumi
            </NavLink>
            <NavLink
              activeClassName='active'
              className='nav-link'
              to='/counter'
            >
              Counter
            </NavLink>
          </nav>
        </div>
        <main className='main'>
          {props.children}
          <Switch>
            {/* using routes object to easily edit routes whenever needed */}
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </main>
        <aside className='sidebar'>
          <ul>
            <li>
              <Link to='/dashboard'>Import Dashboard</Link>
            </li>
            <li>
              <Link to='/new'>New Import</Link>
            </li>
          </ul>
        </aside>
        <footer className='footer'>Footer</footer>
      </div>
    </>
  )
}
export default Layout
