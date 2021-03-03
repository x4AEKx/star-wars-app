import React from "react"
import App from "./App"
import { fireEvent, render, screen } from "@testing-library/react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"
import reducer from "./redux/appReducer"
import { PeopleData } from "./testsData/testsData"

describe("App component testing:", () => {
	const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() }

	const renderWithReduxAndRouter = (
		//@ts-ignore
		component,
		//@ts-ignore
		{ initialState, store = createStore(reducer, initialState) } = {}
	) => {
		return {
			...render(
				//@ts-ignore
				<Router history={historyMock}>
					<Provider store={store}>{component}</Provider>
				</Router>
			),
			store,
		}
	}

	test("render input without value", () => {
		renderWithReduxAndRouter(<App />)
		expect(screen.getByLabelText(/Type for search/)).toBeInTheDocument()
		expect(screen.getByLabelText(/Type for search/)).toHaveValue("")
	})
})
