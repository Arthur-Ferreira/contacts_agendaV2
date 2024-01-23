import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { removeContact } from "./contactsSlice"

type ContactParams = {
  id: string
}

export const ContactDetail = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { id } = useParams<ContactParams>()
  const contact = useAppSelector(state =>
    state.contactList.find(contact => contact.id === id),
  )

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
    <main>
      <article>
        <h2>{contact.name}</h2>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <Link to={`edit`}>Edit</Link>
        <button onClick={onRemoveContact}>Delete</button>
      </article>
    </main>
  )
}
