import type React from "react"

import { StyledItem } from "./styles"

export default function NavItem({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return <StyledItem>{children}</StyledItem>
}
