import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/layout.scss'

const Layout = props => {
  return (
    <>
      <div className='layout'>
        <div className='header'>
          <nav className='nav'>
            <Link className='nav-link' to='/'>
              Home AKA Lumi
            </Link>
            <Link className='nav-link' to='/about'>
              About
            </Link>
            <Link className='nav-link' to='/shows'>
              TV Shows
            </Link>
            <Link className='nav-link' to='/fakerql'>
              FakeQL
            </Link>
            <Link className='nav-link' to='/counter'>
              Counter
            </Link>
          </nav>
        </div>
        <main className='main'>{props.children}</main>
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
