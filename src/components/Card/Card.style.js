import styled from "styled-components"

export const CardTitle = styled.p`
  color: white;
  text-decoration: none;
`

export const CardSubtitle = styled.p`
  color: #999999;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: center;
  cursor: pointer;

  .img-container {
    overflow: hidden;
    width: 100%;
    height: calc(100vw - 48px);
    background-color: #999999;

    :hover {
      .bg {
        transform: scale(1.2);
      }

      .bg:before {
        background-color: rgb(0, 0, 0, 0.3);
      }
    }
  }

  .bg {
    position: relative;
    background-position: center;
    background-size: cover;
    background-image: url(${({ imgBg }) => imgBg});
    width: 100%;
    height: 100%;
    transition: all .5s;

    ::before {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: transparent;
      transition: all .5s;
    }
  }

  ${CardTitle}, ${CardSubtitle}, img {
    margin-top: 10px;
  }

  
`

export default Card
