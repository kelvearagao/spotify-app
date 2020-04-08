import styled from "styled-components"

export const Wrapper = styled.section`
  font-size: 18px;

  header {
    margin-bottom: 40px;

    a {
      color: #fafafa;
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
        background-color: #999999;

        :hover .bg {
          opacity: 1;
          transform: none;
        }

        :hover .bg:before {
          display: none;
        }

        @media (min-width: 450px) {
          width: 300px;
          height: 300px;
        }
      }

      p {
        font-size: 18px;
      }
    }
  }

  ol {
    margin-left: 0px;
  }

  @media (min-width: 800px) {
    section {
      flex-direction: row;
    }

    ol {
      margin-left: 60px;
    }
  }
`
