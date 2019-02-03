import React from 'react'
import './about.scss'


import { Route } from 'react-router-dom'

const NavAbout = () => (
  <Route render={({ history }) => (
    <div className="nav-activator-about" >
      <button
        type='button'
        onClick={() => { history.push('/') }}
        className="go-menu"
      >
      </button>
    </div>
  )} />
)

export default NavAbout
