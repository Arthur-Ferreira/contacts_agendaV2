import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import type { Contact } from "../../../../features/contacts/Contact"
import { useAppDispatch } from "../../../../app/hooks"
import { editContact } from "../../../../features/contacts/contactsSlice"
import AppContainer from "../../../Atoms/AppContainer"
import Button from "../../../Atoms/Button"

import { StyledForms, StyledLabel, StyledInput } from "../styles"

export default function EditForm({
  contact,
}: {
  contact: Contact
}): JSX.Element {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const id = contact.id

  const [name, setName] = useState(contact?.name)
  const [email, setEmail] = useState(contact?.email)
  const [phone, setPhone] = useState(contact?.phone)

  const onNameChanged = (e: any) => setName(e.target.value)
  const onEmailChanged = (e: any) => setEmail(e.target.value)
  const onPhoneChanged = (e: any) => setPhone(e.target.value)

  const onSaveContact = () => {
    if (id && name && email && phone) {
      dispatch(editContact({ id, name, email, phone }))
      navigate("/contacts")
    }
    setName("")
    setEmail("")
    setPhone("")
  }

  return (
    <AppContainer>
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
        <Button type="button" onClick={onSaveContact}>
          Update
        </Button>
      </StyledForms>
    </AppContainer>
  )
}
