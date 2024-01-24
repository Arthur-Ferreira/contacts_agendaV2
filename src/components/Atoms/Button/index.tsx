import type React from "react"

import StyledButton from "./styles"

export default function Button({
  onClick,
  children,
}: {
  onClick: any
  children: React.ReactNode
}): JSX.Element {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
