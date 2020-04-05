import styled from "styled-components"

export const CardTitle = styled.p`
  color: white;
  text-decoration: none;
`

export const CardSubtitle = styled.p`
  color: #999999;
`

export const Card = styled.div`
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: center;
  cursor: pointer;

  img {
    width: 100%;
  }

  ${CardTitle}, ${CardSubtitle}, img {
    margin-top: 10px;
  }

  :hover {
    opacity: 1;
  }

  transition: opacity 0.5s;
`

export default Card
