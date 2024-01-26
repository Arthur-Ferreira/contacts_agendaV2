import React from "react"
import { useParams } from "react-router-dom"

import { useAppSelector } from "../../app/hooks"
import EditForm from "../Organisms/Form/EditForm"

export default function EditContactForm() {
  const { id } = useParams<string>()

  const contact = useAppSelector(state =>
    state.contactList.find(contact => contact.id === id),
  )
  return (
    <main>
      {contact && <EditForm contact={contact} />}
    </main>
  )
}
