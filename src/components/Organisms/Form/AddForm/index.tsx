import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useAppDispatch } from "../../../../app/hooks"
import { addContact } from "../../../../features/contacts/contactsSlice"
import AppContainer from "../../../Atoms/AppContainer"
import Button from "../../../Atoms/Button"

import { StyledForms, StyledLabel, StyledInput } from "../styles"

export default function AddForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const onNameChanged = (e: any) => setName(e.target.value)
  const onEmailChanged = (e: any) => setEmail(e.target.value)
  const onPhoneChanged = (e: any) => setPhone(e.target.value)

  const handleClick = () => {
    if (name && email && phone) {
      dispatch(addContact(name, email, phone))
      navigate("/contacts")
    }
    setName("")
    setEmail("")
    setPhone("")
  }

  return (
    <AppContainer>
      <h1>Add New Contact</h1>
      <StyledForms>
        <p>
          <StyledLabel htmlFor="name">Full name:</StyledLabel>
          <StyledInput
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onNameChanged}
            required
          />
        </p>
        <p>
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onEmailChanged}
            required
          />
        </p>
        <p>
          <StyledLabel htmlFor="phone">Phone number:</StyledLabel>
          <StyledInput
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={onPhoneChanged}
            required
          />
        </p>
        <Button type="button" onClick={handleClick}>
          Create
        </Button>
      </StyledForms>
    </AppContainer>
  )
}
