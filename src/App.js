import React, { useEffect, useState } from "react"
//import { useDispatch } from "react-redux"
import { HashRouter as Router, Route } from "react-router-dom"
import Home from "components/pages/Home"
import Container from "components/Container"
import Content from "components/Content"
import Logo from "components/Logo"
import Album from "components/pages/Album"
import browserHistory from 'utils/browserHistory'

function App() {
  //const dispatch = useDispatch()
  const [hasToken, setHasToken] = useState(() => localStorage.getItem("access_token"))

  console.log('1 -->', !!hasToken, process.env.PUBLIC_URL)
  console.log(window.location)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const access_token = params.get('access_token')

    console.log('2-->', access_token)

    if(access_token) {
      localStorage.setItem('access_token', access_token)
      setHasToken(true)

      window.history.pushState({}, document.title, window.location.origin + '/#/')
    } else {
      window.location.href = process.env.REACT_APP_LOGIN_ENDPOINT
      return
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
          <Router basename='/'>
            <Route exact path="/" component={Home} />
            <Route exact path="/album/:id" component={Album} />
          </Router>
        )}
      </Content>
    </Container>
  )
}

export default App
