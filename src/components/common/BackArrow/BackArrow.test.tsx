import reducer from "../../../redux/appReducer"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { render, fireEvent, screen, findByRole } from "@testing-library/react"
import { BackArrow } from "./BackArrow"
import { Router } from "react-router-dom"

describe("BackArrow testing:", () => {
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

	test("render button", () => {
		renderWithReduxAndRouter(<BackArrow />, {
			initialState: {
				app: {
					isFetching: false,
					data: [],
					value: "",
				},
			},
		})

		expect(screen.getByRole("button")).toBeInTheDocument()
	})

	test("should history.push('/') when clicked on button", () => {
		renderWithReduxAndRouter(<BackArrow />, {
			initialState: {
				app: {
					isFetching: false,
					data: [],
					value: "",
				},
			},
		})

		fireEvent.click(screen.getByRole("button"))
		expect(historyMock.push.mock.calls[0][0]).toEqual("/")
	})
})
