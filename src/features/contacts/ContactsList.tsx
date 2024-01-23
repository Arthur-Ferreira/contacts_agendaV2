import React from "react"
import { useAppSelector } from "../../app/hooks"
import { Link } from "react-router-dom"

export const ContactsList = () => {
  const contacts = useAppSelector(state => state.contactList)

  return (
    <main className="contacts-list">
      <ol>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Link to={`${contact.id}`} className="contacts">
              <h3>{contact.name}</h3>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  )
}
