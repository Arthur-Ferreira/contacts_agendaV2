import type React from "react"

import { StyledNav } from "./styles"

export default function Navigation({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return <StyledNav>{children}</StyledNav>
}
