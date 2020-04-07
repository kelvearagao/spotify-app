import styled from 'styled-components'

export const Album = styled.div`
    display: none;

    @media (min-width: 800px) {
        display: flex;
        align-items: center;

        img {
            width: 50px;
            margin-right: 12px;
        }
    }
`

export default styled.div`
    display: ${({ isVisible }) =>  !isVisible && 'none'};
    > div {
        flex: 1;
    }
    padding: 12px;
    background-color: #252222;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    audio {
       width: 100%;
       margin: 0;
    }

    @media (min-width: 400px) {
        display: ${({ isVisible }) =>  isVisible ? 'flex' : 'none'};
        align-items: center;
        justify-content: space-between;

        audio {
            width: 300px;
        }
    }
`

