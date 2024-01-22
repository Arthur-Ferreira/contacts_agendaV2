import React from 'react'
import { useAppSelector } from '../../app/hooks'

export const ContactsList = () => {
  const contacts = useAppSelector(state => state.contactList)

  const renderedContacts = contacts.map(contact => (
    <article className="contacts" key={contact.id}>
      <h3>{contact.name}</h3>
      <p className="contacts-content">{contact.email}</p>
      <p className="contacts-content">{contact.phone}</p>
    </article>
  ))

  return (
    <section className="contacts-list">
      <h2>Contacts</h2>
      {renderedContacts}
    </section>
  )
}