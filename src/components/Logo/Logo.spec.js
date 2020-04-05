import React from "react"
import { render } from "@testing-library/react"
import Logo from "./Logo"

describe("Logo", () => {
  it("Should render the Logo component", () => {
    const { container } = render(<Logo />)

    expect(container.querySelector("img")).toBeInTheDocument()
  })
})
