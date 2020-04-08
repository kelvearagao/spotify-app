import styled from "styled-components"

export const TrackList = styled.ol`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`

export const TrackItem = styled.li`
  display: flex;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  padding-bottom: 20px;

  :hover {
    opacity: 1;
  }

  outline: none;

  transition: opacity 0.25s;
`

export const TrackIndex = styled.span`
  width: 40px;
`

export const TrackName = styled.span`
  width: 100%;
`

export const TrackTime = styled.span`
  padding-left: 12px;
`
