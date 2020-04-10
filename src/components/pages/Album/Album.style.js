import styled from 'styled-components'
import { color, fontSize, media } from 'theme'

export const Wrapper = styled.section`
  font-size: ${fontSize.md};

  header {
    margin-bottom: 40px;

    a {
      color: ${color.snow};
      text-decoration: none;
    }
  }

  section {
    display: flex;
    flex-direction: column;
  }

  article {
    width: 100%;
  }

  aside {
    -webkit-tap-highlight-color: transparent;
    #main-img {
      margin-bottom: 24px;

      div {
        cursor: default;
        margin-bottom: 20px;
      }

      .img-container {
        margin: 0 auto;

        .bg {
          transition: none;
        }

        :hover .bg {
          opacity: 1;
          transform: none;
        }

        :hover .bg:before {
          background-color: transparent;
        }

        @media (min-width: ${media.sm}) {
          width: 300px;
          height: 300px;
        }
      }

      p {
        font-size: ${fontSize.md};
      }
    }
  }

  ol {
    margin-left: 0px;
  }

  @media (min-width: ${media.md}) {
    section {
      flex-direction: row;
    }

    ol {
      margin-left: 60px;
    }
  }
`
