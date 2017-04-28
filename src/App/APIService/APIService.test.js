import axios from "axios";
import MockAdapter from "axios-mock-adapter"
import APIService from "./APIService"

describe("APIService", () => {
  let service
  
  beforeEach(() => {
    service = new APIService("https://spoken-api.herokuapp.com")
  })
  
  describe("constructor", () => {
    it("has a base url", () => {
      expect(service.connection.defaults.baseURL).toBeTruthy();
      expect(service.connection.defaults.baseURL)
        .toEqual("https://spoken-api.herokuapp.com")
    })

    it("has an API key", () => {
      expect(service.key).toBeTruthy()
    })
  })

  describe("#get", () => {
    it("makes a get request", async () => {
      const mock = new MockAdapter(service.connection)
      mock.onGet("/api/v1/route_pins").reply(200)

      const response = await service.get("/api/v1/route_pins")
      expect(response.status).toEqual(200)
    })
  })

  describe("#post", () => {
    it("makes a post request", async () => {
      const mock = new MockAdapter(service.connection)
      mock.onPost("/api/v1/suggestion_pins").reply(200)

      const response = await service.post("/api/v1/suggestion_pins")
      expect(response.status).toEqual(200)
    })
  })
})
