import styled from 'styled-components'
import { media } from 'theme'

export default styled.img`
  display: none;
  width: 50px;

  @media (min-width: ${media.sm}) {
    display: block;
  }
`
