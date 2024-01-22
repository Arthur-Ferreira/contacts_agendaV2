import React from "react"
import { useAppSelector } from "../../app/hooks"

export const ContactsList = () => {
  const contacts = useAppSelector(state => state.contactList)

  return (
    <aside className="contacts-list">
      <ol>
        {contacts.map(contact => (
          <li>
            <article className="contacts" key={contact.id}>
              <h3>{contact.name}</h3>
              <p className="contacts-content">{contact.email}</p>
              <p className="contacts-content">{contact.phone}</p>
            </article>
          </li>
        ))}
      </ol>
    </aside>
  )
}
