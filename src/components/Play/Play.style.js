import styled from 'styled-components'

export const Album = styled.div`
  display: none;
  font-size: 12px;

  @media (min-width: 800px) {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      margin-right: 12px;
    }
  }
`

export const WrapperContent = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;

  > div {
    flex: 1;
  }

  audio {
    outline: none;
    width: 100%;
    margin: 0;
  }

  @media (min-width: 450px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export default styled.div`
  display: ${({ isVisible }) => !isVisible && 'none'};
  padding: 12px;
  background-color: #252222;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  @media (min-width: 450px) {
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};

    audio {
      width: 300px;
    }
  }
`
