import type React from "react"
import StyledButton from "./styles"

type ButtonProps = {
  onClick: any
  children: React.ReactNode
  type?: "button" | "submit" | "reset" // Define type prop
}

export default function Button({
  onClick,
  children,
  type = "button",
}: ButtonProps): JSX.Element {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
