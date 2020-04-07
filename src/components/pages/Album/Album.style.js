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
    #main-img {
      div {
        cursor: default;
        margin-bottom: 20px;
      }

      img {
        width: 100%;
        background-color: #999999;
      }

      p {
        font-size: 18px;
      }
    }
  }

  ol {
    margin-left: 0px;
  }

  @media (min-width: 400px) {
    section {
      flex-direction: row;
    }

    aside {
      #main-img {
        img {
          width: 300px;
          height: 300px;
        }
      }
    }

    ol {
      margin-left: 60px;
    }
  }
`
