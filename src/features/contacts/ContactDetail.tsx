import React from "react"
import { Link, useParams } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"

type ContactParams = {
  id: string
}

export const ContactDetail = () => {
  const { id } = useParams<ContactParams>()
  const contact = useAppSelector(state =>
    state.contactList.find(contact => contact.id === id)
  )

  if (!contact) {
    return (<h2>Contact not Found</h2>)
  }

  return (
    <article>
      <h2>{contact.name}</h2>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <Link to={`${contact.id}/edit`}>Edit</Link>
      <button>Delete</button>
    </article>
  )
}
