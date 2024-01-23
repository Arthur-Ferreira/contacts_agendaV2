import type React from "react"
import { MobileBtn } from "./styles"

export default function MobileMenu({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}): JSX.Element {
  return <MobileBtn title={title}>{children}</MobileBtn>
}
