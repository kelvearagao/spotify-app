import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { millisToMinutesAndSeconds } from 'utils/time'
import {
  TrackList,
  TrackItem,
  TrackIndex,
  TrackName,
  TrackTime
} from 'components/TrackList'
import BackIcon from 'components/Back'
import Card from 'components/Card'
import { Wrapper } from './Album.style'
import { Link } from 'react-router-dom'
import { path } from 'ramda'
import { albumRequest } from 'store/reducers/album'
import { playSetMusic } from 'store/reducers/play'

export default ({ match }) => {
  const data = useSelector(({ album }) => album.data[match.params.id])
  const playData = useSelector(({ play }) => play.data)
  const artist = path(['artist'], data)
  const name = path(['name'], data)
  const image = path(['image'], data)
  const items = path(['items'], data) || []

  const dispatch = useDispatch()

  useEffect(() => {
    if (!data) {
      dispatch(albumRequest(match.params.id))
    }
  }, [dispatch, match.params.id, data])

  function selectMusic(item, index) {
    dispatch(
      playSetMusic({
        previewUrl: item.preview_url,
        artist: path(['artists', 0, 'name'], item),
        musicName: item.name,
        index,
        albumName: name,
        albumImg: image,
        items,
        albumId: match.params.id
      })
    )
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
          <Card
            id="main-img"
            imgSrc={image}
            title={name}
            subtitle={artist}
            isActive
          />
        </aside>

        <article>
          <TrackList>
            {items.map((item, index) => (
              <TrackItem
                key={item.id}
                isActive={
                  playData.musicName + playData.index === item.name + index
                }
                onClick={() => selectMusic(item, index)}
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
