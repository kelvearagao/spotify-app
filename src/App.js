import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Container from "components/Container"
import Content from "components/Content"
import Logo from "components/Logo"

function App() {
  return (
    <Container>
      <Logo />
      <Content>
          <Router>
            <Route exact path="/" component={() => <h1>...Loading</h1>} />
          </Router>
      </Content>
    </Container>
  )
}

export default App
