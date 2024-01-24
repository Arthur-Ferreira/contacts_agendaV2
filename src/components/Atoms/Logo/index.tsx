import type React from "react"

import StyledLogo from "./styles"

export default function Logo({ children }: { children: string }): JSX.Element {
  return <StyledLogo>{children}</StyledLogo>
}
