import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  p {
    text-align: center;
    margin-bottom: 10px;
  }

  audio {
    --width: 100%;
  }

  #player {
    display: block;
    padding: 25px;
    color: #333;
  }

  #play,
  #next,
  #pre {
    --width: 50px;
    --height: 50px;
    border: 0;
    background-color: transparent;
    --border-radius: 50%;
    outline: none;
    cursor: pointer;
    position: absolute;
    --top: 50%;
    --left: 50%;
    --transform: translate(-50%, -50%);

    i {
      color: #ffffff;
      font-size: 18px;
    }
  }

  #buttons {
    display: flex;
    width: 100%;
    margin-top: 65px;
    position: relative;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #next {
    width: 30px;
    height: 30px;
    left: 70%;
  }

  #play {
    font-size: 24px;
  }

  #pre {
    width: 30px;
    height: 30px;
    left: 30%;
  }

  #play img,
  #next img,
  #pre img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #seek-bar {
    width: 250px;
    height: 5px;
    background-color: gray;
    display: flex;
    border: 50px;
    margin-left: 25px;
    cursor: pointer;
  }

  #fill {
    height: 5px;
    background-color: #202021;
    border-radius: 20px;
  }

  #handle {
    width: 9px;
    height: 9px;
    background-color: #202021;
    border-radius: 50%;
    margin-left: -5px;
    transform: scale(2);
  }
`
