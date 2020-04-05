import React from "react"
import { renderWithProviderAndRouter, mockStore } from "__tests__/utils"
import { createMemoryHistory } from "history"
import Album from "./Album"
import { fireEvent } from "@testing-library/dom"

window.HTMLMediaElement.prototype.play = sinon.spy()

const item = {
  id: 1,
  artist: "Katy",
  name: "Katy Album",
  image: "katy.jpeg",
  items: [
    {
      id: 1,
      name: "Fireworks",
      duration_ms: 200000
    }
  ]
}

describe("Album", () => {
  it("Should render the Album component", () => {
    const match = {
      params: {
        id: 1
      }
    }
    const { getByText } = renderWithProviderAndRouter({
      history: createMemoryHistory(),
      store: mockStore({
        album: {
          data: {}
        }
      }),
      component: <Album match={match} />
    })

    expect(getByText("Voltar")).to.exist
    expect(getByText("Your browser does not support the audio element.")).to
      .exist
  })

  it("Should render the track item", () => {
    const match = {
      params: {
        id: 1
      }
    }
    const { getByText } = renderWithProviderAndRouter({
      history: createMemoryHistory(),
      store: mockStore({
        album: {
          data: {
            [item.id]: {
              ...item
            }
          }
        }
      }),
      component: <Album match={match} />
    })

    expect(getByText("1.")).to.exist
    expect(getByText("Fireworks")).to.exist
    expect(getByText("3:20")).to.exist
  })

  it("Should play the track item when it is clicked", () => {
    const match = {
      params: {
        id: 1
      }
    }
    const { getByText } = renderWithProviderAndRouter({
      history: createMemoryHistory(),
      store: mockStore({
        album: {
          data: {
            [item.id]: {
              ...item
            }
          }
        }
      }),
      component: <Album match={match} />
    })

    fireEvent.click(getByText("Fireworks"))

    expect(window.HTMLMediaElement.prototype.play).to.have.been.called
  })
})
