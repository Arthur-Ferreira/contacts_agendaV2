import React from "react"
import { NavLink } from "react-router-dom"

export const AppHeader = () => {
  return (
    <>
      <header className="main-header">
        <div id="sidebar">
          <div className="logo">
            <h1>Contacts</h1>
            <nav>
              <ul>
                <li>
                  <NavLink to={'/contacts'} className="nav-items">All Contacts</NavLink>
                </li>
                <li>
                  <NavLink to={'/new'} className="nav-items">New Contact</NavLink>
                </li>
              </ul>
            </nav>
            <button id="mobile-menu-btn" type="button" title="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
