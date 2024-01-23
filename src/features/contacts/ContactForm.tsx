import React, { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { addContact } from "./contactsSlice"
import { useNavigate } from "react-router-dom"

export const AddContactForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const onNameChanged = (e: any) => setName(e.target.value)
  const onEmailChanged = (e: any) => setEmail(e.target.value)
  const onPhoneChanged = (e: any) => setPhone(e.target.value)

  const handleClick = () => {
    if (name && email && phone) {
      dispatch(addContact(name, email, phone))
      navigate("/contacts")
    }
    setName("")
    setEmail("")
    setPhone("")
  }

  return (
    <main>
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
        <button type="button" onClick={handleClick}>
          Adicionar
        </button>
      </form>
    </main>
  )
}
