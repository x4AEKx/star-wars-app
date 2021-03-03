import { useState, useEffect, ChangeEvent, FC } from "react"
import { TextField } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { setGlobalValue, searchGlobal, clearData } from "./../../redux/appReducer"
import { useHistory } from "react-router-dom"

export const Input: FC = (props: any) => {
	const [value, setValue] = useState("")

	const dispatch = useDispatch()
	const history = useHistory()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
		dispatch(setGlobalValue(e.currentTarget.value.trim()))
	}

	useEffect(() => {
		if (value.length >= 3) {
			dispatch(searchGlobal(value.trim()))
		} else if (value.length <= 2) {
			dispatch(clearData())
		}
	}, [value])

	return (
		<TextField
			id="outlined-basic"
			label="Type for search"
			variant="outlined"
			value={value}
			onChange={handleChange}
		/>
	)
}
