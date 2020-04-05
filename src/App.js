import React, { useEffect, useState } from "react"
//import { useDispatch } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "components/pages/Home"
import Container from "components/Container"
import Content from "components/Content"
import Logo from "components/Logo"
import Album from "components/pages/Album"

function App() {
  //const dispatch = useDispatch()
  const [hasToken, setHasToken] = useState(() => localStorage.getItem("access_token"))

  useEffect(() => {
    if(hasToken) {
      return
    }

    const params = new URLSearchParams(window.location.search);
    const access_token = params.get('access_token')

    if(!access_token) {
      window.location.href = 'https://7j1ylvai5f.execute-api.us-west-2.amazonaws.com/dev/login'

      return
    }

    if(access_token) {
      localStorage.setItem('access_token', access_token)
      setHasToken(true)
      window.history.pushState({}, document.title, "/");
    }
  }, [])

  // useEffect(() => {
  //   if (!hasToken) {
  //     dispatch({ type: "TOKEN_REQUEST" })
  //   }
  // }, [hasToken, dispatch])

  return (
    <Container>
      <Logo />
      <Content>
        {!hasToken ? (
          "Loading ..."
        ) : (
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/album/:id" component={Album} />
          </Router>
        )}
      </Content>
    </Container>
  )
}

export default App
