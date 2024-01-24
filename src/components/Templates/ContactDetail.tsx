import React from "react"

import { useParams } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"

import AppContainer from "../Atoms/AppContainer"
import ContactItem from "../Molecules/ContactItem"

type ContactParams = {
  id: string
}

export default function ContactDetail() {
  const { id } = useParams<ContactParams>()
  const contact = useAppSelector(state =>
    state.contactList.find(contact => contact.id === id),
  )

  return (
    <main>
      <AppContainer>
        <h1>Contact Information</h1>
        <ContactItem contact={contact} />
      </AppContainer>
    </main>
  )
}
