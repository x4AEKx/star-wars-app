import React from "react"
import reducer from "../../redux/appReducer"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { render, fireEvent, screen, findByRole } from "@testing-library/react"
import { DataTable } from "./DataTable"
import { PeopleData } from "./../../testsData/testsData"
import { Router } from "react-router-dom"

describe("Table component:", () => {
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

	test("render table", () => {
		renderWithReduxAndRouter(<DataTable />, {
			initialState: {
				app: {
					isFetching: false,
					data: [PeopleData],
					value: "",
				},
			},
		})

		expect(screen.getByRole("table")).toBeInTheDocument()
	})

	test("shouldn`t render table when data.length is 0", () => {
		renderWithReduxAndRouter(<DataTable />, {
			initialState: {
				app: {
					isFetching: false,
					data: [],
					value: "",
				},
			},
		})

		expect(screen.queryByRole("table")).not.toBeInTheDocument()
	})

	test("should history.push('/profile/${name}') when clicked on element", () => {
		renderWithReduxAndRouter(<DataTable />, {
			initialState: {
				app: {
					isFetching: false,
					data: [PeopleData],
					value: "Luke Skywalker",
				},
			},
		})

		fireEvent.click(screen.getByText(/Luke Skywalker/))
		expect(historyMock.push.mock.calls[0][0]).toEqual("/profile/Luke Skywalker")
	})

	test("should render ...Loading when isFetching: true", () => {
		renderWithReduxAndRouter(<DataTable />, {
			initialState: {
				app: {
					isFetching: true,
					data: [PeopleData],
					value: "Luke Skywalker",
				},
			},
		})

		expect(screen.queryByText("...Loading")).toBeInTheDocument()
	})

	test("shouldn`t render element if Data doesn`t have match Value", () => {
		renderWithReduxAndRouter(<DataTable />, {
			initialState: {
				app: {
					isFetching: false,
					data: [PeopleData],
					value: "123",
				},
			},
		})
		expect(screen.queryByText("Luke Skywalker")).not.toBeInTheDocument()
	})
})
