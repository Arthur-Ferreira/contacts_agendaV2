import React, { useState } from "react"

import Logo from "../../Atoms/Logo"
import MobileMenu from "../../Atoms/MobileBtn"

import { MobileSpan } from "../../Atoms/MobileBtn/styles"
import { MainHeader, HeaderContainer } from "./styles"
import NavMenu from "../NavMenu"
import AppAside from "../Aside"

export default function AppHeader() {
  const [showMenu, setShowMenu] = useState(false)
  function onOpenMobileMenu() {
    if (!showMenu) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }

  return (
    <>
      <MainHeader>
        <HeaderContainer>
          <Logo>Contacts</Logo>
          <NavMenu />
          <MobileMenu onClick={onOpenMobileMenu} title="Menu">
            <MobileSpan></MobileSpan>
            <MobileSpan></MobileSpan>
            <MobileSpan></MobileSpan>
          </MobileMenu>
        </HeaderContainer>
      </MainHeader>
      {showMenu && <AppAside />}
    </>
  )
}
