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
      margin-bottom: 24px;
      
      div {
        cursor: default;
        margin-bottom: 20px;
      }

      img {
        margin: 0 auto;
        width: 100%;
        max-width: 400px;
        max-height: 400px;
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

  @media (min-width: 800px) {
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
