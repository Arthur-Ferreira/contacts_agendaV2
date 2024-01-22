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
      const index = state.contactList.findIndex((contact) => contact.id === action.payload)
      state.contactList.splice(index, 1)
    },
    // editContact(
    //   state,
    //   action: PayloadAction<{ completed: boolean, id: string }>
    // ) {
    //   const index = state.findIndex((contact) => contact.id === action.payload.id)
    //   state[index].completed = action.payload.completed;
    // },
  }
});

export const { 
  addContact, 
  removeContact, 
  // editContact
} = contactSlice.actions

export default contactSlice.reducer