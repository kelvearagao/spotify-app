import styled from 'styled-components'
import { media } from 'theme'

const Content = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1140px;

  @media (min-width: ${media.sm}) {
    padding: 0;
    padding-top: 12px;
  }

  @media (min-width: ${media.lg}) {
    top: -40px;
  }
`

export default Content
