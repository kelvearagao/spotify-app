import React from "react"
import { Wrapper } from "./AudioPlay.style"
import Pre from "./Pre.png"
import Pause from "./Pause.png"
import Next from "./Next.png"

export default ({ trackName, artist, audioRef }) => (
  <Wrapper>
    {/* <p>{trackName && `${artist} - ${trackName}`}</p> */}
    <audio preload="auto" controls ref={audioRef}>
      <source type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>

    {/* <div id="player">
      <div id="buttons">
          <button id="pre" onclick="pre()"><i class="fa fa-step-backward"></i></button>
          <button id="play" onclick="playOrPauseSong()"><i class="fa fa-play fa-fw"></i></button>
          <button id="next" onclick="next()"><i class="fa fa-step-forward"></i></button>
      </div>
      <div id="seek-bar">          
          <div id="fill"></div>
          <div id="handle"></div>
      </div>
    </div> */}

  </Wrapper>
)
