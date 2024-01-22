import React from "react"

import { AppHeader } from "./features/contacts/AppHeader"
import { AddContactForm } from "./features/contacts/ContactForm"

import "./App.css"

const App = () => {
  return (
    <>
      <AppHeader />
      <AddContactForm />
    </>
  )
}

export default App
