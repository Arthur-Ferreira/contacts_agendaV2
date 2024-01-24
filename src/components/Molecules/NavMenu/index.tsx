import type React from "react"

import Navigation from "./Navigation"
import { UList } from "../../Atoms/Lists"
import NavItem from "./NavItem"

import { StyledNavLink } from "./styles"

export default function NavMenu() {
  return (
    <Navigation>
      <UList>
        <NavItem>
          <StyledNavLink to={"/contacts"} end>All Contacts</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to={"/new"}>New Contact</StyledNavLink>
        </NavItem>
      </UList>
    </Navigation>
  )
}
