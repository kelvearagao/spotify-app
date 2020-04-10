import styled, { keyframes } from 'styled-components'
import { color, fontSize, media } from 'theme'

export const Modal = styled.div`
  background-color: ${color.grey};
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  h2 {
    color: ${color.black};
  }
`

const animatetop = keyframes`
    from {top: -300px; opacity: 0;}
    to {top: 10%; opacity: 1;}
`

export const ModalContent = styled.div`
  position: relative;
  margin: auto;
  padding: 0;
  border: 1px solid ${color.grey};
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: ${animatetop};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;

  @media (min-width: ${media.sm}) {
    width: 400px;
  }
`

export const ModalHeader = styled.div`
  font-size: ${fontSize.sm};
  font-weight: 500;
  padding: 12px;
  background-color: ${color.nightRider};
  color: ${color.white};
`

export const ModalBody = styled.div`
  padding: 12px;
  height: 100px;
  background-color: ${color.nero};
`

export const ModalFooter = styled.div`
  padding: 12px;
  background-color: ${color.nightRider};
  color: ${color.white};
`
