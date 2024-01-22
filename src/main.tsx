import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App"
import { store } from "./app/store"
import { ErrorPage } from "./features/contacts/ErrorPage"
import { ContactDetail } from "./features/contacts/ContactDetail"
import { AddContactForm } from "./features/contacts/ContactForm"
import { ContactsList } from "./features/contacts/ContactsList"

import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "new",
        element: <AddContactForm />,
      },
      {
        path: "contacts",
        children: [
          {
            index: true,
            element: <ContactsList />,
          },
          {
            path: ":id",
            children: [
              {
                index: true,
                element: <ContactDetail />,
              },
              {
                path: "edit",
                element: "",
              },
              {
                path: "delete",
                element: "",
              },
            ],
          },
        ],
      },
    ],
  },
])

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
