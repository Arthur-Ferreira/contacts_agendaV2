import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { editContact } from "./contactsSlice"
import { useNavigate, useParams } from "react-router-dom"

export const EditContactForm = () => {
  const navigate = useNavigate()
  const { id } = useParams<string>()

  const contact = useAppSelector(state =>
    state.contactList.find(contact => contact.id === id),
  )
  const dispatch = useAppDispatch()

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
    <div className="App">
      <form>
        <p>
          <label htmlFor="name">Nome completo: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onNameChanged}
          />
        </p>
        <p>
          <label htmlFor="email">E-mail: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onEmailChanged}
          />
        </p>
        <p>
          <label htmlFor="phone">Telefone: </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={onPhoneChanged}
          />
        </p>
        <button type="button" onClick={onSaveContact}>
          Adicionar
        </button>
      </form>
    </div>
  )
}
