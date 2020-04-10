import styled from 'styled-components'
import { color, fontSize } from 'theme'

export default styled.button`
  cursor: pointer;

  border-radius: 50px;
  padding: 12px 24px;
  border-width: 0;
  outline: none;
  color: ${color.white};
  font-size: ${fontSize.xs};
  font-weight: 700;
  background-color: ${color.darkGreen};
  :not(:disabled):hover {
    background-color: ${color.lightGreen};
  }

  ${({ variante }) =>
    variante === 'secondary' &&
    `
        background-color: transparent;
        border: 1px solid  ${color.white};
        :not(:disabled):hover {
            color: ${color.darkGreen};
            background-color: ${color.white};
        }
    `}

  :disabled {
    cursor: not-allowed;
  }
`
