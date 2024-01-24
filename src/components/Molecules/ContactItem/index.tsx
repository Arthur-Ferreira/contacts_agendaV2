import type React from "react"

import Anchor from "../../Atoms/Anchor"
import type { Contact } from "../../../features/contacts/Contact"

import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../app/hooks"
import { removeContact } from "../../../features/contacts/contactsSlice"
import { Actions, Article, Paragraph } from "./styles"
import Button from "../../Atoms/Button"

export default function ContactItem({
  contact,
}: {
  contact: Contact
}): JSX.Element {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const id = contact.id

  if (!contact || !id) {
    return <h2>Contact not Found</h2>
  }

  const onRemoveContact = () => {
    if (id) {
      dispatch(removeContact(id))
    }
    navigate("/contacts")
  }
  return (
    <Article>
      <h2>{contact.name}</h2>
      <Paragraph>{contact.email}</Paragraph>
      <Paragraph>{contact.phone}</Paragraph>
      <Actions>
        <Anchor to={`edit`}>Edit</Anchor>
        <Button type="button" onClick={onRemoveContact}>Delete</Button>
      </Actions>
    </Article>
  )
}
