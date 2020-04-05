import React, { useEffect, useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { millisToMinutesAndSeconds } from "utils/time"
import {
  TrackList,
  TrackItem,
  TrackIndex,
  TrackName,
  TrackTime
} from "components/TrackList"
import AudioPlay from "components/AudioPlay"
import BackIcon from "components/Back"
import Card from "components/Card"
import { Wrapper } from "./Album.style"
import { Link } from "react-router-dom"
import { path } from "ramda"
import { albumRequest } from "store/reducers/album"

export default ({ match }) => {
  const data = useSelector(({ album }) => album.data[match.params.id])
  const artist = path(["artist"], data)
  const name = path(["name"], data)
  const image = path(["image"], data)
  const items = path(["items"], data) || []

  const dispatch = useDispatch()
  const [music, setMusic] = useState("")
  const audioRef = useRef(null)

  useEffect(() => {
    if (!data) {
      dispatch(albumRequest(match.params.id))
    }
  }, [dispatch, match.params.id, data])

  function selectMusic(item) {
    setMusic(item)

    audioRef.current.src = item.preview_url
    audioRef.current.play()
  }

  return (
    <Wrapper>
      <header>
        <Link to="/">
          <BackIcon /> Voltar
        </Link>
      </header>

      <section>
        <aside>
          <Card imgSrc={image} title={name} subtitle={artist} isActive />

          <AudioPlay
            artist={artist}
            trackName={music.name}
            audioRef={audioRef}
          />
        </aside>

        <article>
          <TrackList>
            {items.map((item, index) => (
              <TrackItem
                key={item.id}
                isActive={item.id === music.id}
                onClick={() => selectMusic(item)}
              >
                <TrackIndex>{index + 1}.</TrackIndex>
                <TrackName>{item.name}</TrackName>
                <TrackTime>
                  {millisToMinutesAndSeconds(item.duration_ms)}
                </TrackTime>
              </TrackItem>
            ))}
          </TrackList>
        </article>
      </section>
    </Wrapper>
  )
}
