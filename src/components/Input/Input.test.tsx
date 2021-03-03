import React from "react"
import { Input } from "./Input"
import { render, fireEvent, screen } from "@testing-library/react"
import * as redux from "react-redux"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from "../../redux/appReducer"

describe("Input component testing:", () => {
	const renderWithRedux = (
		//@ts-ignore
		component,
		//@ts-ignore
		{ initialState, store = createStore(reducer, initialState) } = {}
	) => {
		return {
			...render(<Provider store={store}>{component}</Provider>),
			store,
		}
	}

	test("render input", () => {
		const { getByRole } = renderWithRedux(<Input />)
		expect(getByRole("textbox")).toBeInTheDocument()
	})

	test("should change value when onChange() event", () => {
		renderWithRedux(<Input />)
		expect(screen.getByRole("textbox")).toHaveValue("")
		fireEvent.change(screen.getByRole("textbox"), { target: { value: "sk" } })
		expect(screen.queryByRole("textbox")).toHaveValue("sk")
	})

	test("should dispatch 3 actions", () => {
		const useDispatchSpy = jest.spyOn(redux, "useDispatch")
		const mockDispatchFn = jest.fn()
		useDispatchSpy.mockReturnValue(mockDispatchFn)

		renderWithRedux(<Input />)
		fireEvent.change(screen.getByRole("textbox"), { target: { value: "sky" } })
		expect(mockDispatchFn).toHaveBeenCalledTimes(3)

		useDispatchSpy.mockClear()
	})
})
