import React from "react"

import { AppHeader } from "./features/contacts/AppHeader"
import { AddContactForm } from "./features/contacts/ContactForm"
import { ContactsList } from "./features/contacts/ContactsList"

import "./App.css"

const App = () => {
  return (
    <>
      <AppHeader />
      <AddContactForm />
      <ContactsList />
    </>
  )
}

export default App
