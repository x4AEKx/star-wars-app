import { Dispatch } from "redux"
import { searchAPI } from "../api/api"
import {
	PeopleType,
	FilmsType,
	StarshipsType,
	VehiclesType,
	SpeciesType,
	PlanetsType,
} from "./../types/types"

export type DataType = Array<
	PeopleType | FilmsType | StarshipsType | VehiclesType | SpeciesType | PlanetsType
>

export type InitialState = {
	isFetching: boolean
	data: DataType
	value: string
}

let initialState: InitialState = {
	isFetching: false,
	data: [],
	value: "",
}

const appReducer = (state = initialState, action: ActionsTypes): InitialState => {
	switch (action.type) {
		case "APP/TOGGLE_IS_FETCHING": {
			return {
				...state,
				isFetching: action.isFetching,
			}
		}
		case "APP/SET_DATA_PEOPLE": {
			const newDataPeople = { ...action.person, type: "People" }
			return {
				...state,
				data: [...state.data.filter((item) => item.name !== newDataPeople.name), newDataPeople],
			}
		}
		case "APP/SET_DATA_FILMS": {
			const newDataFilms = { ...action.film, name: action.film.title, type: "Films" }
			return {
				...state,
				data: [...state.data.filter((item) => item.name !== newDataFilms.name), newDataFilms],
			}
		}
		case "APP/SET_DATA_STARSHIPS": {
			const newDataStarships = { ...action.starship, type: "Starships" }
			return {
				...state,
				data: [
					...state.data.filter((item) => item.name !== newDataStarships.name),
					newDataStarships,
				],
			}
		}
		case "APP/SET_DATA_VEHICLES": {
			const newDataVehicles = { ...action.vehicle, type: "Vehicles" }
			return {
				...state,
				data: [...state.data.filter((item) => item.name !== newDataVehicles.name), newDataVehicles],
			}
		}
		case "APP/SET_DATA_SPECIES": {
			const newDataSpecies = { ...action.species, type: "Species" }
			return {
				...state,
				data: [...state.data.filter((item) => item.name !== newDataSpecies.name), newDataSpecies],
			}
		}
		case "APP/SET_DATA_PLANETS": {
			const newDataPlanets = { ...action.planet, type: "Planets" }
			return {
				...state,
				data: [...state.data.filter((item) => item.name !== newDataPlanets.name), newDataPlanets],
			}
		}
		case "APP/CLEAR_DATA": {
			return {
				...state,
				data: [],
			}
		}
		case "APP/SET_VALUE": {
			return {
				...state,
				value: action.value,
			}
		}
		default:
			return state
	}
}

export type ActionsTypes =
	| {
			type: "APP/TOGGLE_IS_FETCHING"
			isFetching: boolean
	  }
	| { type: "APP/SET_DATA_PEOPLE"; person: PeopleType }
	| { type: "APP/SET_VALUE"; value: string }
	| {
			type: "APP/SET_DATA_FILMS"
			film: FilmsType
	  }
	| {
			type: "APP/SET_DATA_STARSHIPS"
			starship: StarshipsType
	  }
	| {
			type: "APP/SET_DATA_VEHICLES"
			vehicle: VehiclesType
	  }
	| {
			type: "APP/SET_DATA_SPECIES"
			species: SpeciesType
	  }
	| {
			type: "APP/SET_DATA_PLANETS"
			planet: PlanetsType
	  }
	| {
			type: "APP/CLEAR_DATA"
	  }
	| {
			type: "APP/SET_SEARCH_DATA"
			data: object
	  }

export const toggleIsFetching = (isFetching: boolean): ActionsTypes => {
	return {
		type: "APP/TOGGLE_IS_FETCHING",
		isFetching,
	}
}

export const setPeople = (person: PeopleType): ActionsTypes => {
	return {
		type: "APP/SET_DATA_PEOPLE",
		person,
	}
}

export const setFilms = (film: FilmsType): ActionsTypes => {
	return {
		type: "APP/SET_DATA_FILMS",
		film,
	}
}

export const setStarships = (starship: StarshipsType): ActionsTypes => {
	return {
		type: "APP/SET_DATA_STARSHIPS",
		starship,
	}
}

export const setVehicles = (vehicle: VehiclesType): ActionsTypes => {
	return {
		type: "APP/SET_DATA_VEHICLES",
		vehicle,
	}
}

export const setSpecies = (species: SpeciesType): ActionsTypes => {
	return {
		type: "APP/SET_DATA_SPECIES",
		species,
	}
}

export const setPlanets = (planet: PlanetsType): ActionsTypes => {
	return {
		type: "APP/SET_DATA_PLANETS",
		planet,
	}
}

export const clearData = (): ActionsTypes => {
	return {
		type: "APP/CLEAR_DATA",
	}
}

export const setGlobalValue = (value: string): ActionsTypes => {
	return {
		type: "APP/SET_VALUE",
		value,
	}
}

export const searchPeople = (search: string) => async (dispatch: Dispatch<ActionsTypes>) => {
	let responce = await searchAPI.searchPeople(search)
	responce.results.map((person: PeopleType) => {
		dispatch(setPeople(person))
	})
}

export const searchFilms = (search: string) => async (dispatch: Dispatch<ActionsTypes>) => {
	let responce = await searchAPI.searchFilm(search)
	responce.results.map((film: FilmsType) => {
		dispatch(setFilms(film))
	})
}

export const searchStarships = (search: string) => async (dispatch: Dispatch<ActionsTypes>) => {
	let responce = await searchAPI.searchStarships(search)
	responce.results.map((starship: StarshipsType) => {
		dispatch(setStarships(starship))
	})
}

export const searchVehicles = (search: string) => async (dispatch: Dispatch<ActionsTypes>) => {
	let responce = await searchAPI.searchVehicles(search)
	responce.results.map((vehicle: VehiclesType) => {
		dispatch(setVehicles(vehicle))
	})
}

export const searchSpecies = (search: string) => async (dispatch: Dispatch<ActionsTypes>) => {
	let responce = await searchAPI.searchSpecies(search)
	responce.results.map((species: SpeciesType) => {
		dispatch(setSpecies(species))
	})
}

export const searchPlanets = (search: string) => async (dispatch: Dispatch<ActionsTypes>) => {
	let responce = await searchAPI.searchPlanets(search)
	responce.results.map((planet: PlanetsType) => {
		dispatch(setPlanets(planet))
	})
}

export const searchGlobal = (search: string) => async (dispatch: any) => {
	dispatch(toggleIsFetching(true))
	Promise.all([
		dispatch(searchPeople(search)),
		dispatch(searchFilms(search)),
		dispatch(searchStarships(search)),
		dispatch(searchVehicles(search)),
		dispatch(searchSpecies(search)),
		dispatch(searchPlanets(search)),
	]).then(dispatch(toggleIsFetching(false)))
}

export default appReducer
