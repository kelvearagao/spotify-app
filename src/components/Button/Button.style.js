import styled from 'styled-components'

export default styled.button`
  cursor: pointer;

  border-radius: 50px;
  padding: 12px 24px;
  border-width: 0;
  outline: none;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  background-color: #1db954;
  :not(:disabled):hover {
    background-color: #1ed760;
  }

  ${({ variante }) =>
    variante === 'secondary' &&
    `
        background-color: transparent;
        border: 1px solid  #ffffff;
        :not(:disabled):hover {
            color: #1db954;
            background-color: #ffffff;
        }
    `}

  :disabled {
    cursor: not-allowed;
  }
`
