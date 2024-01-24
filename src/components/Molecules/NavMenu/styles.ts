import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: none;

  @media (min-width: 48rem) {
    display: block;
  }
`

const StyledItem = styled.li`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 48rem) {
    flex-direction: row;
  }
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  white-space: pre;
  padding: 0.5rem;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
  gap: 1rem;


  &:hover {
  background: #e3e3e3;
  }

  &.active {
  background: hsl(224, 98%, 58%);
  color: white;
  }
`

export { StyledNav, StyledItem, StyledNavLink }