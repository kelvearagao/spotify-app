import React, { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import AudioPlay from 'components/AudioPlay'
import Wrapper, { Album } from './Play.style'

export default () => {
    const playData = useSelector(({ play }) => play.data)
    const audioRef = useRef(null)

    useEffect(() => {
        audioRef.current.src = playData.previewUrl
        audioRef.current.play()
    }, [playData.previewUrl])

    return (
            <Wrapper isVisible={playData.previewUrl}>
                <div>
                    <Album>
                        <div>
                            { playData.albumImg && <img src={playData.albumImg} /> }
                        </div>
                        <div>
                            <div>
                                { playData.musicName }
                            </div>
                            <div>
                                { playData.artist }
                            </div>
                        </div>
                    </Album>
                </div>

                <AudioPlay
                artist={playData.artist}
                trackName={playData.musicName}
                audioRef={audioRef}
                />

                <div>
                    { ' '}
                </div>
            </Wrapper>
        )
}

