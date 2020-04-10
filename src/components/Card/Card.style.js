import styled from 'styled-components'
import { color, fontSize, media } from 'theme'

export const CardTitle = styled.p`
  color: ${color.white};
  text-decoration: none;
`

export const CardSubtitle = styled.p`
  color: ${color.darkGrey};
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${fontSize.xs};
  text-align: center;
  cursor: pointer;

  .img-container {
    overflow: hidden;
    width: 100%;
    height: calc(100vw - 48px);
    background-color: ${color.darkGrey};

    .bg {
      background-image: url(${({ imgBg }) => imgBg});
      position: relative;
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
    }

    @media (min-width: ${media.sm}) {
      :hover {
        .bg {
          transform: scale(1.2);
        }

        .bg:before {
          background-color: rgb(0, 0, 0, 0.3);
        }
      }
    }
  }

  @media (min-width: ${media.sm}) {
    .bg {
      transition: all 0.5s;

      ::before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: transparent;
        transition: all 0.5s;
      }
    }
  }

  ${CardTitle}, ${CardSubtitle}, img {
    margin-top: 10px;
  }
`

export default Card
