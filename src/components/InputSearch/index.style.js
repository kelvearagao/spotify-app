import styled from "styled-components"

export const InputSearch = styled.input`
  width: 100%;
  font-size: 24px;
  background-color: transparent;
  color: #fafafa;
  font-weight: bold;
  border: 0;
  outline: 0;
  caret-color: #ffffff;
  padding: 8px 0 10px 0;
  border-bottom: 1px solid #999999;

  ::-webkit-input-placeholder {
    color: #999999;
  }

  @media (min-width: 450px) {
    font-size: 38px;
    padding: 8px 10px 10px 10px;
  }
`
