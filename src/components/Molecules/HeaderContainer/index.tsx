import React from "react"
import { NavLink } from "react-router-dom"
import {
  MobileBtn,
  MobileSpan,
} from "../../../components/Atoms/MobileBtn/styles"
import { MainHeader, HeaderContainer } from "./styles"

export default function AppHeaderContainer() {
  return (
    <MainHeader>
      <HeaderContainer>
        <div className="logo">
          <h1>Contacts</h1>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to={"/contacts"} className="nav-items">
                All Contacts
              </NavLink>
            </li>
            <li>
              <NavLink to={"/new"} className="nav-items">
                New Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <MobileBtn type="button" title="Menu">
          <MobileSpan></MobileSpan>
          <MobileSpan></MobileSpan>
          <MobileSpan></MobileSpan>
        </MobileBtn>
      </HeaderContainer>
    </MainHeader>
  )
}
