import styled from "styled-components"

const Content = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1140px;
  padding-top: 24px;

  @media (min-width: 400px) {
    padding: 0;
    padding-top: 12px;
  }

  @media (min-width: 1280px) {
    top: -40px;
  } 
`

export default Content
