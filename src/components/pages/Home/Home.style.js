import styled from "styled-components"

export const Wrapper = styled.div`
  color: #fafafa;

  label span {
    padding-left: 0;
    font-size: 16px;
    opacity: 0.8;

    @media (min-width: 400px) {
      padding-left: 10px;
    }
  }

  h1 {
    font-size: 18px;
    margin: 35px 0 30px 5px;
    font-weight: 300;

    @media (min-width: 400px) {
      font-size: 24px;
    }
  }
`

export const CardsWrapper = styled.div`
  display: grid;
  grid-column-gap: 70px;
  grid-row-gap: 33px;
  justify-content: space-between;

  img {
    width: 100%;
    background-color: #999999;
  }

  @media (min-width: 400px) {
    grid-template-columns: repeat(auto-fill, 150px);

    img {
      width: 150px;
      height: 150px;
    }
  }
`
