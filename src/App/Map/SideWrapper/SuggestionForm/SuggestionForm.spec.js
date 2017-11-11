import React from "react"
import { shallow } from "enzyme"
import SuggestionForm from "./SuggestionForm"

const props = {
  suggestionPin: {},
  actions: {
    addSuggestionPin: jest.fn(),
    addSuggestions: jest.fn(),
  }
}

describe("<SuggestionForm />", () => {
  const wrapper = shallow(<SuggestionForm {...props} />)
  const suggestionForm = wrapper.instance()

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe("initial state", () => {
    it("is valid", () => {
      const expectedState = { 
        pin: { 
          name: '',
          email: '',
          label: '',
          description: '',
          category: '',
          message: '' 
        },
        suggestionSent: false,
        suggestionFailed: false,
        formNotification: '' 
      }
      expect(suggestionForm.state).toMatchObject(expectedState)
    })
    it("has an empty form for resets", () => {
      const emptyForm = { 
        name: '',
        email: '',
        label: '',
        description: '',
        category: '',
        message: '' 
      }
      expect(suggestionForm.clearedForm).toMatchObject(emptyForm)
    })
  })

  describe("handleChange", () => {
    it("sets state for pin information", () => {
      expect(suggestionForm.state.pin.email).toEqual("")
      suggestionForm.handleChange(fakeEvent)
      expect(suggestionForm.state.pin.email).toEqual("tommy@crosby.com")
    })
  })

  describe("handleSubmit", () => {
    it("calls postSuggestion", () => {
      const restore = suggestionForm.postSuggestion
      const mock = suggestionForm.postSuggestion = jest.fn()

      suggestionForm.handleSubmit(fakeEvent)
      expect(mock).toHaveBeenCalled()
      suggestionForm.postSuggestion = restore
    })
  })

  describe("postSuggestion", () => {
    it("calls service.post", async () => {
      const restore = fakeService.post
      const mock = fakeService.post = jest.fn()

      await suggestionForm.postSuggestion(fakeService, {})
      expect(mock).toHaveBeenCalled()
      fakeService.post = restore
    })

    it("calls submitSuccess", async () => {
      const restore = suggestionForm.submitSuccess
      const mock = suggestionForm.submitSuccess = jest.fn()
      await suggestionForm.postSuggestion(fakeService, {})

      expect(mock).toHaveBeenCalled()
      suggestionForm.submitSuccess = restore
    })
  })

  describe("submitSuccess", () => {
    const actions = ['addSuggestions', 'addSuggestionPin']
    actions.forEach(action => {
      it(`calls the ${action} action`, async () => {
        const mock = suggestionForm.props.actions[action]
        await suggestionForm.submitSuccess()
        expect(mock).toHaveBeenCalled()
        mock.mockReset()
      })
    })

    it("updates form state", async () => {
      const suggestionForm = shallow(<SuggestionForm {...props} />).instance()
      const newState = {
        pin: {
          name: "Name",
          email: "YES",
          label: 'Something',
          description: 'Desc',
          category: 'Stay',
          message: 'hello'
        },
        suggestionSent: false,
        suggestionFailed: false,
        formNotification: ''
      }
      suggestionForm.setState(newState)

      expect(suggestionForm.state).toMatchObject(newState)

      await suggestionForm.submitSuccess()

      expect(suggestionForm.state).not.toMatchObject(newState)
      expect(suggestionForm.state).toMatchObject({
        formNotification: "Suggestion sent!",
        suggestionSent: true,
        pin: { ...suggestionForm.clearedForm }
      })
    })
  })

  describe("submitFail", () => {
    it("updates state correctly", () => {
      const suggestionForm = shallow(<SuggestionForm {...props} />).instance()
      const error = {
        responseJSON: { error: "Failed!" }
      }
      const newState = {
        formNotification: "Failed!",
        suggestionFailed: true
      }

      expect(suggestionForm.state).not.toMatchObject(newState)
      suggestionForm.submitFail(error)
      expect(suggestionForm.state).toMatchObject(newState)
    })
  })

  describe("deactivate", () => {
    it("resets state for sent/failed", () => {
      suggestionForm.setState({ suggestionSent: true, suggestionFailed: true, })
      const deactivated = { suggestionSent: false, suggestionFailed: false, }

      expect(suggestionForm.state).not.toMatchObject(deactivated)
      suggestionForm.deactivate()
      expect(suggestionForm.state).toMatchObject(deactivated)
    })
  })
})

const fakeEvent = {
  preventDefault () {},
  target: {
    name: "email",
    value: "tommy@crosby.com"
  }
}

const fakeService = {
  post (url, data) {}
}
