import type React from "react"

import Container from "./styles"

export default function AppContainer({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return <Container>{children}</Container>
}
