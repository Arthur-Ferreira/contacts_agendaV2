import type React from "react"

import StyledLink from "./styles"

export default function Anchor({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}): JSX.Element {
  return <StyledLink to={to}>{children}</StyledLink>
}
