import styled from 'styled-components'

export const Wrapper = styled.div`
  color: #fafafa;

  label span {
    padding-left: 0;
    font-size: 16px;
    opacity: 0.8;

    @media (min-width: 450px) {
      padding-left: 10px;
    }
  }

  h1 {
    font-size: 18px;
    margin: 35px 0 6px 5px;
    font-weight: 300;

    @media (min-width: 450px) {
      font-size: 24px;
    }
  }
`

export const CardsWrapper = styled.div`
  .img-container {
    width: 100%;
    background-color: #999999;
    margin-top: 24px;
  }

  @media (min-width: 450px) {
    display: grid;
    grid-column-gap: 70px;
    grid-row-gap: 33px;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 150px);

    .img-container {
      width: 150px;
      height: 150px;
    }
  }
`
