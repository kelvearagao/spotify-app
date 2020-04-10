import styled from 'styled-components'
import { color, fontSize } from 'theme'

export default styled.div`
  text-align: center;

  input[type='text'] {
    border-width: 0;
    padding: 8px;
    font-size: ${fontSize.xs};
    background-color: transparent;
    border-bottom: 1px solid ${color.darkGrey};
    outline: none;
    caret-color: ${color.white};
    width: 100%;
    color: ${color.white};
  }

  button:nth-child(2) {
    margin-left: 12px;
  }
`
