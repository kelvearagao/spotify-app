import React from 'react'
import { render } from '@testing-library/react'
import AudioPlay from './AudioPlay'

describe('AudioPlay', () => {
  it('Should render the AudioPlay component', () => {
    const { getByText } = render(
      <AudioPlay artist="Artist A" trackName={'Track 1'} />
    )

    expect(getByText('Your browser does not support the audio element.'))
  })
})
