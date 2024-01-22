import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

import type { Contact } from "./Contact";


type initialStateType = {
  contactList: Contact[];
}

const contactList: Contact[] = [
  {
    id: nanoid(),
    name: "Roger ndutiye",
    email: "rogerndutiye@gmail.com",
    phone: "250788841494",
  },
  {
    id: nanoid(),
    name: "Stacy ndutiye",
    email: "stacyndutiye@gmail.com",
    phone: "250738841494",
  },
  {
    id: nanoid(),
    name: "Joe Kalisa",
    email: "Joe.Kalisa@gmail.com",
    phone: "250738841491",
  },
  {
    id: nanoid(),
    name: "Ange Keza",
    email: "ange.keza@gmail.com",
    phone: "250738841491",
  },
  {
    id: nanoid(),
    name: "Roger ndutiye",
    email: "rogerndutiye@gmail.com",
    phone: "250788841494",
  },
  {
    id: nanoid(),
    name: "Stacy ndutiye",
    email: "stacyndutiye@gmail.com",
    phone: "250738841494",
  },
  {
    id: nanoid(),
    name: "Joe Kalisa",
    email: "Joe.Kalisa@gmail.com",
    phone: "250738841491",
  },
  {
    id: nanoid(),
    name: "Ange Keza",
    email: "ange.keza@gmail.com",
    phone: "250738841491",
  },
  {
    id: nanoid(),
    name: "Joe Kalisa",
    email: "Joe.Kalisa@gmail.com",
    phone: "250738841491",
  },
  {
    id: nanoid(),
    name: "Ange Keza",
    email: "ange.keza@gmail.com",
    phone: "250738841491",
  },
];


const initialState: initialStateType = {
  contactList,
};


export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action: PayloadAction<Contact>) => {
        state.contactList.push(action.payload);
      },
      prepare: (name: string, email: string, phone: string) => ({
        payload: {
          id: nanoid(),
          name,
          email,
          phone,
        } as Contact,
      }),
    },
    removeContact: (state, action: PayloadAction<string>) => {
      const contactId = action.payload;
      state.contactList = state.contactList.filter((contact) => contact.id !== contactId);
    },
    editContact: (
      state,
      action: PayloadAction<{ id: string; name: string; email: string; phone: string }>) => {
      const { id, name, email, phone } = action.payload
      const existingContact = state.contactList.find((contact) => contact.id === id)
      if (existingContact) {
        existingContact.name = name
        existingContact.email = email
        existingContact.phone = phone
      }
    },
  }
});

export const {
  addContact,
  removeContact,
  editContact
} = contactSlice.actions

export default contactSlice.reducer