import React from "react"

import { useAppSelector } from "../../app/hooks"

import AppContainer from "../Atoms/AppContainer"
import { OList } from "../Atoms/Lists"
import Anchor from "../Atoms/Anchor"

export default function ContactsList() {
  const contacts = useAppSelector(state => state.contactList)

  return (
    <main className="contacts-list">
      <AppContainer>
        <h1>Contacts List</h1>
        <OList>
          {contacts.map(contact => (
            <li key={contact.id}>
              <Anchor to={`${contact.id}`}>
                <h3>{contact.name}</h3>
              </Anchor>
            </li>
          ))}
        </OList>
      </AppContainer>
    </main>
  )
}
