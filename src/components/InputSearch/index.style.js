import styled from 'styled-components'
import { color, fontSize, media } from 'theme'

export const InputSearch = styled.input`
  width: 100%;
  font-size: ${fontSize.lg};
  background-color: transparent;
  color: ${color.snow};
  font-weight: bold;
  border: 0;
  outline: 0;
  caret-color: ${color.white};
  padding: 8px 0 10px 0;
  border-bottom: 1px solid ${color.darkGrey};

  ::-webkit-input-placeholder {
    color: ${color.darkGrey};
  }

  @media (min-width: ${media.sm}) {
    font-size: ${fontSize.xl};
    padding: 8px 10px 10px 10px;
  }
`
