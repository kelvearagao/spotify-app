import React, { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { HashRouter as Router, Route } from "react-router-dom"
import Home from "components/pages/Home"
import Container from "components/Container"
import Content from "components/Content"
import Logo from "components/Logo"
import Album from "components/pages/Album"
import ModalToken from "components/ModalToken"
import Play from "components/Play"

function App() {
  const dispatch = useDispatch()
  const requestToken = useSelector(({ token }) => token.requestToken)
  const [hasToken, setHasToken] = useState(() => localStorage.getItem("access_token"))

  // useEffect(() => {
  //   if(hasToken) {
  //     return
  //   }

  //   const params = new URLSearchParams(window.location.search);
  //   const access_token = params.get('access_token')
  //   const refresh_token = params.get('refresh_token')

  //   if(access_token) {
  //     localStorage.setItem('access_token', access_token)
  //     localStorage.setItem('refresh_token', refresh_token)
  //     setHasToken(true)

  //     window.history.pushState({}, document.title, process.env.PUBLIC_URL + (process.env.PUBLIC_URL === '/' ? '#/' : '/#/'))
  //   } else {
  //     window.location.href = process.env.REACT_APP_LOGIN_ENDPOINT
  //     return
  //   }
  // }, [])

  useEffect(() => {
    if (!hasToken) {
      dispatch({ type: "TOKEN_REQUEST" })
    }
  }, [hasToken, dispatch])

  console.log('-->', requestToken)

  return (
    <Container>
      <Logo />
      <Content>
        <Router basename='/'>
          <Route exact path="/" component={Home} />
          <Route exact path="/album/:id" component={Album} />
        </Router>

        <ModalToken requestToken={requestToken}/>

        <Play />
      </Content>
    </Container>
  )
}

export default App
