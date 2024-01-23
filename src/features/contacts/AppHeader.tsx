import React from "react"
import { NavLink } from "react-router-dom"
import { MobileBtn, MobileSpan } from "../../components/Atoms/MobileBtn/styles"
import AppHeaderContainer from "../../components/Molecules/HeaderContainer"

export const AppHeader = () => {
  return (
    <header className="main-header">
      <AppHeaderContainer />
    </header>
  )
}
