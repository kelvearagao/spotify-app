import styled from 'styled-components'
import { color, fontSize, media } from 'theme'

export const MusicName = styled.div`
  width: 100%;
`

export const ArtistName = styled.div`
  color: ${color.darkGrey};
`

export const AlbumName = styled.div`
  align-items: center;
  display: none;

  @media (min-width: ${media.md}) {
    text-align: right;
    display: flex;
    justify-content: flex-end;
  }
`

export const Album = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: ${fontSize.xs};

  > div:last-child {
    width: calc(100% - 50px - 12px);
  }

  img {
    width: 54px;
    margin-right: 12px;
  }

  ${MusicName}, ${ArtistName} {
    display: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  @media (min-width: ${media.sm}) {
    width: auto;
    ${MusicName}, ${ArtistName} {
      display: block;
    }
  }
`

export const WrapperContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;

  > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  audio {
    position: relative;
    outline: none;
    width: calc(100vw - 96px);
    margin: 0;
  }

  @media (min-width: ${media.sm}) {
    > div {
      flex: 1;
    }

    audio {
      width: 100%;
    }
  }
`

export default styled.div`
  display: ${({ isVisible }) => !isVisible && 'none'};
  padding: 12px;
  background-color: ${color.nero};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  @media (min-width: ${media.sm}) {
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  }
`
