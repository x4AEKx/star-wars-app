import { AppStateType } from "./../redux/store"

export const getData = (state: AppStateType) => {
	return state.app.data
}

export const getValue = (state: AppStateType) => {
	return state.app.value
}

export const toggleFetching = (state: AppStateType) => {
	return state.app.isFetching
}
