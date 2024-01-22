import React from "react"
import { Outlet } from 'react-router-dom'

import { AppHeader } from "./features/contacts/AppHeader"

import "./App.css"

const App = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  )
}

export default App
