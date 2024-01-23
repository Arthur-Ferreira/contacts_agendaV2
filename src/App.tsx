import React from "react"
import { Outlet } from "react-router-dom"

import { AppHeader } from "./features/contacts/AppHeader"

import "./App.css"
import GlobalStyle from "./components/GlobalStyle"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppHeader />
      <Outlet />
    </>
  )
}

export default App
