import { get } from "./ajax"
import * as ajaxModule from "rxjs/ajax"

jest.mock("rxjs/ajax")
ajaxModule.ajax = jest.fn()

describe("get", () => {
  it("Should set the access token in the header authorization", () => {
    const url = "https://api.spotify.com/token"
    localStorage.setItem("access_token", "123")

    get(url)

    expect(ajaxModule.ajax).toBeCalledWith({
      url,
      method: "GET",
      headers: {
        Authorization: "Bearer 123"
      }
    })
  })
})
