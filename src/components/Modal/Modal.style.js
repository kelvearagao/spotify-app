import styled, { keyframes } from 'styled-components'

export const Modal = styled.div`
    background-color: #888;
    display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);

    h2 {
        color: black;
    }
`

const animatetop = keyframes`
    from {top: -300px; opacity: 0;}
    to {top: 10%; opacity: 1;}
`

export const ModalContent = styled.div`
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    animation-name: ${animatetop};
    animation-duration: 0.4s;
    animation-fill-mode: forwards;

    @media (min-width: 400px) {
        width: 400px;
    }
`

export const ModalClose = styled.span`
    padding: 8px 16px;
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;

    &:hover, &:focus {
        color: #000000;
        text-decoration: none;
        cursor: pointer;
    }
`

export const ModalHeader = styled.div`
    font-size: 16px;
    font-weight: 500;
    padding: 12px;
    background-color: #333333;
    color: white;
`

export const ModalBody = styled.div`
    padding: 12px;
    height: 100px;  
    background-color: #252222;
`

export const ModalFooter = styled.div`
    padding: 12px;
    background-color: #333333;
    color: white;
`