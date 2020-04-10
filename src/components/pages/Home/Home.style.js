import styled from 'styled-components'
import { color, fontSize, media } from 'theme'

export const Wrapper = styled.div`
  color: ${color.snow};

  label span {
    padding-left: 0;
    font-size: ${fontSize.sm};
    opacity: 0.8;

    @media (min-width: ${media.sm}) {
      padding-left: 10px;
    }
  }

  h1 {
    font-size: ${fontSize.md};
    margin: 35px 0 6px 5px;
    font-weight: 300;

    @media (min-width: ${media.sm}) {
      font-size: ${fontSize.lg};
    }
  }
`

export const CardsWrapper = styled.div`
  .img-container {
    width: 100%;
    background-color: ${color.darkGrey};
    margin-top: 24px;
  }

  @media (min-width: ${media.sm}) {
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
