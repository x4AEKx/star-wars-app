import React from "react"
import reducer from "../../redux/appReducer"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { render, fireEvent, screen, findByRole } from "@testing-library/react"
import { UnitTable } from "./UnitTable"
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

	test("render table and element 'Return to Search'", () => {
		renderWithReduxAndRouter(
			<UnitTable
				//@ts-ignore
				match={{ params: { dataName: "Luke Skywalker" }, isExact: true, path: "", url: "" }}
			/>,
			{
				initialState: {
					app: {
						isFetching: false,
						data: [PeopleData],
						value: "",
					},
				},
			}
		)

		expect(screen.getByRole("table")).toBeInTheDocument()
		expect(screen.getByText(/Return to Search/)).toBeInTheDocument()
	})
})
