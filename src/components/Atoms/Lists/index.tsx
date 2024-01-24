import type React from "react"

import { StyledOl } from "./styles"
import { StyledUl } from "./styles"

export function OList({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return <StyledOl>{children}</StyledOl>
}

export function UList({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return <StyledUl>{children}</StyledUl>
}
