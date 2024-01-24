import React from "react"

import AppContainer from "../Atoms/AppContainer"

export default function RootLayout() {
  return (
    <main>
      <AppContainer>
        <h2>Welcome to my Contacts List!</h2>
        <p>Click on "All Contacts" to check out your friends listed</p>
        <p>Or on "New Contact" to add a new one.</p>
      </AppContainer>
    </main>
  )
}
