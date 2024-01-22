import React from "react"

import { ContactsList } from "./ContactsList"

export const AppHeader = () => {
  return (
    <>
      <header className="App-header">
        <div id="sidebar">
          <h1>Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
        </div>
      </header>
      <ContactsList />
    </>
  )
}
