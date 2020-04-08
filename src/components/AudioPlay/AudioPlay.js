import React from 'react'
import { Wrapper } from './AudioPlay.style'

export default ({ audioRef }) => (
  <Wrapper>
    <audio preload="auto" controls ref={audioRef}>
      <source type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  </Wrapper>
)
