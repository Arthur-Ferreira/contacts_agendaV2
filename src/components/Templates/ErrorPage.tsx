import { Link, useRouteError } from "react-router-dom"

import AppContainer from "../Atoms/AppContainer"

export const ErrorPage = () => {
  const error: any = useRouteError()
  console.error(error)

  return (
    <>
      <main id="error-page">
        <AppContainer>
          <h1>Oops!</h1>
          <p>
            Sorry, an unexpected error has occurred
            <Link to={"/"}> back to safety</Link>.
          </p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </AppContainer>
      </main>
    </>
  )
}
