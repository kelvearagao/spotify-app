import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Card from "./Card"

describe("Card", () => {
  it("Should render the Card component", () => {
    const { getByText } = render(
      <Card imgSrc={"/foto.png"} title={"Album"} subtitle={"Artist"} />
    )

    expect(getByText("Album")).toBeInTheDocument()
    expect(getByText("Artist")).toBeInTheDocument()
  })
})
