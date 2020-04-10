import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AudioPlay from 'components/AudioPlay'
import { playSetMusic } from 'store/reducers/play'
import Wrapper, {
  Album,
  WrapperContent,
  MusicName,
  ArtistName,
  AlbumName
} from './Play.style'

const playNextMusic = (audioRef, index, items) => {
  setTimeout(() => {
    audioRef.current.src = items[index].preview_url
    audioRef.current.play()
  }, 250)
}

export default () => {
  const dispatch = useDispatch()
  const playData = useSelector(({ play }) => play.data)
  const audioRef = useRef(null)

  function setNextMusic() {
    const next =
      playData.index + 1 === playData.items.length ? 0 : playData.index + 1

    dispatch(
      playSetMusic({
        previewUrl: playData.items[next].preview_url,
        musicName: playData.items[next].name,
        items: playData.items,
        albumName: playData.albumName,
        index: next,
        albumId: playData.albumId
      })
    )
  }

  useEffect(() => {
    audioRef.current.addEventListener('ended', setNextMusic, false)

    if (playData.musicName) {
      playNextMusic(audioRef, playData.index, playData.items)
    }

    return () => {
      audioRef.current.removeEventListener('ended', setNextMusic, false)
    }
  }, [playData.musicName])

  return (
    <Wrapper isVisible={playData.previewUrl}>
      <WrapperContent>
        <div>
          <Album>
            <div>
              {playData.albumImg && (
                <img src={playData.albumImg} alt={playData.artist} />
              )}
            </div>
            <div>
              <MusicName>{playData.musicName}</MusicName>
              <ArtistName>{playData.artist}</ArtistName>
            </div>
          </Album>
        </div>

        <AudioPlay
          artist={playData.artist}
          trackName={playData.musicName}
          audioRef={audioRef}
        />

        <AlbumName>
          <span>{playData.albumName}</span>
        </AlbumName>
      </WrapperContent>
    </Wrapper>
  )
}
