import { configureStore } from '@reduxjs/toolkit'
// ...
import contactReducer from '../features/contacts/contactsSlice';

export const store = configureStore({
  reducer: contactReducer,
})

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>