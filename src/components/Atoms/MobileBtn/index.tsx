import type React from "react"
import { MobileBtn } from "./styles"

export default function MobileMenu({
  title,
  onClick,
  children,
}: {
  title: string
  onClick: any,
  children: React.ReactNode
}): JSX.Element {
  return (
    <MobileBtn type="button" title={title} onClick={onClick}>
      {children}
    </MobileBtn>
  )
}
