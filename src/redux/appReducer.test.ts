import {
	PeopleData,
	FilmData,
	StarshipData,
	VehicleData,
	SpeciesData,
	PlanetData,
} from "../testsData/testsData"
import appReducer, {
	InitialState,
	setFilms,
	searchPeople,
	searchFilms,
	searchStarships,
	searchVehicles,
	searchSpecies,
	searchPlanets,
	searchGlobal,
	toggleIsFetching,
	setPeople,
	setStarships,
	setVehicles,
	setSpecies,
	setPlanets,
} from "./appReducer"

let state: InitialState

beforeEach(() => {
	state = {
		isFetching: false,
		data: [],
		value: "",
	}
})

describe("appReducer testing:", () => {
	// actions
	test("toggle isFetching", () => {
		const newState = appReducer(state, toggleIsFetching(true))
		expect(newState.isFetching).toBeTruthy()
	})

	test("should return the initial state", () => {
		// @ts-ignore
		expect(appReducer(undefined, {})).toEqual({
			isFetching: false,
			data: [],
			value: "",
		})
	})

	describe("setPeople testing:", () => {
		test("setPeople should return the people object with type", () => {
			expect(setPeople(PeopleData)).toEqual({
				type: "APP/SET_DATA_PEOPLE",
				person: PeopleData,
			})

			const newState = appReducer(state, setPeople(PeopleData))
			expect(newState).toEqual({
				isFetching: false,
				data: [
					{
						type: "People",
						...PeopleData,
					},
				],
				value: "",
			})
		})

		test("same object should call filter", () => {
			const secondState = appReducer(
				{
					isFetching: false,
					data: [
						{
							type: "People",
							...PeopleData,
						},
					],
					value: "",
				},
				setPeople(PeopleData)
			)
			expect(secondState).toEqual({
				isFetching: false,
				data: [
					...state.data.filter((item) => item.name !== PeopleData.name),
					{
						type: "People",
						...PeopleData,
					},
				],
				value: "",
			})
		})
	})

	describe("setFilms testing:", () => {
		test("should return the film object with type and name", () => {
			expect(setFilms(FilmData)).toEqual({
				type: "APP/SET_DATA_FILMS",
				film: FilmData,
			})

			const newState = appReducer(state, setFilms(FilmData))
			expect(newState).toEqual({
				isFetching: false,
				data: [
					{
						name: FilmData.title,
						type: "Films",
						...FilmData,
					},
				],
				value: "",
			})
		})

		test("same object should call filter", () => {
			const secondState = appReducer(
				{
					isFetching: false,
					data: [
						{
							name: FilmData.title,
							type: "Films",
							...FilmData,
						},
					],
					value: "",
				},
				setFilms(FilmData)
			)
			expect(secondState).toEqual({
				isFetching: false,
				data: [
					...state.data.filter((item) => item.name !== FilmData.name),
					{
						name: FilmData.title,
						type: "Films",
						...FilmData,
					},
				],
				value: "",
			})
		})
	})

	describe("setStarships testing:", () => {
		test("should return the starship object with type", () => {
			expect(setStarships(StarshipData)).toEqual({
				type: "APP/SET_DATA_STARSHIPS",
				starship: StarshipData,
			})

			const newState = appReducer(state, setStarships(StarshipData))
			expect(newState).toEqual({
				isFetching: false,
				data: [
					{
						type: "Starships",
						...StarshipData,
					},
				],
				value: "",
			})
		})

		test("same object should call filter", () => {
			const secondState = appReducer(
				{
					isFetching: false,
					data: [
						{
							type: "Starships",
							...StarshipData,
						},
					],
					value: "",
				},
				setStarships(StarshipData)
			)
			expect(secondState).toEqual({
				isFetching: false,
				data: [
					...state.data.filter((item) => item.name !== StarshipData.name),
					{
						type: "Starships",
						...StarshipData,
					},
				],
				value: "",
			})
		})
	})

	describe("setVehicles testing:", () => {
		test("should return the vehicle object with type", () => {
			expect(setVehicles(VehicleData)).toEqual({
				type: "APP/SET_DATA_VEHICLES",
				vehicle: VehicleData,
			})

			const newState = appReducer(state, setVehicles(VehicleData))
			expect(newState).toEqual({
				isFetching: false,
				data: [
					{
						type: "Vehicles",
						...VehicleData,
					},
				],
				value: "",
			})
		})

		test("same object should call filter", () => {
			const secondState = appReducer(
				{
					isFetching: false,
					data: [
						{
							type: "Vehicles",
							...VehicleData,
						},
					],
					value: "",
				},
				setVehicles(VehicleData)
			)
			expect(secondState).toEqual({
				isFetching: false,
				data: [
					...state.data.filter((item) => item.name !== VehicleData.name),
					{
						type: "Vehicles",
						...VehicleData,
					},
				],
				value: "",
			})
		})
	})

	describe("setSpecies testing:", () => {
		test("should return the species object with type", () => {
			expect(setSpecies(SpeciesData)).toEqual({
				type: "APP/SET_DATA_SPECIES",
				species: SpeciesData,
			})

			const newState = appReducer(state, setSpecies(SpeciesData))
			expect(newState).toEqual({
				isFetching: false,
				data: [
					{
						type: "Species",
						...SpeciesData,
					},
				],
				value: "",
			})
		})

		test("same object should call filter", () => {
			const secondState = appReducer(
				{
					isFetching: false,
					data: [
						{
							type: "Species",
							...SpeciesData,
						},
					],
					value: "",
				},
				setSpecies(SpeciesData)
			)
			expect(secondState).toEqual({
				isFetching: false,
				data: [
					...state.data.filter((item) => item.name !== SpeciesData.name),
					{
						type: "Species",
						...SpeciesData,
					},
				],
				value: "",
			})
		})
	})

	describe("setPlanets testing:", () => {
		test("should return the species object with type", () => {
			expect(setPlanets(PlanetData)).toEqual({
				type: "APP/SET_DATA_PLANETS",
				planet: PlanetData,
			})

			const newState = appReducer(state, setPlanets(PlanetData))
			expect(newState).toEqual({
				isFetching: false,
				data: [
					{
						type: "Planets",
						...PlanetData,
					},
				],
				value: "",
			})
		})

		test("same object should call filter", () => {
			const secondState = appReducer(
				{
					isFetching: false,
					data: [
						{
							type: "Planets",
							...PlanetData,
						},
					],
					value: "",
				},
				setPlanets(PlanetData)
			)
			expect(secondState).toEqual({
				isFetching: false,
				data: [
					...state.data.filter((item) => item.name !== PlanetData.name),
					{
						type: "Planets",
						...PlanetData,
					},
				],
				value: "",
			})
		})
	})

	// thunks
	test("thunk searchPeople should dispatch 1 action", async () => {
		const thunk = searchPeople("Luke Skywalker")

		const dispatchMock = jest.fn()

		await thunk(dispatchMock)
		expect(dispatchMock).toHaveBeenCalledTimes(1)
	})

	test("thunk searchFilms should dispatch 1 action", async () => {
		const thunk = searchFilms("A New Hope")

		const dispatchMock = jest.fn()

		await thunk(dispatchMock)
		expect(dispatchMock).toHaveBeenCalledTimes(1)
	})

	test("thunk searchStarships should dispatch 1 action", async () => {
		const thunk = searchStarships("Death Star")

		const dispatchMock = jest.fn()

		await thunk(dispatchMock)
		expect(dispatchMock).toHaveBeenCalledTimes(1)
	})

	test("thunk searchVehicles should dispatch 1 action", async () => {
		const thunk = searchVehicles("Sand Crawler")

		const dispatchMock = jest.fn()

		await thunk(dispatchMock)
		expect(dispatchMock).toHaveBeenCalledTimes(1)
	})

	test("thunk searchSpecies should dispatch 1 action", async () => {
		const thunk = searchSpecies("Wookie")

		const dispatchMock = jest.fn()

		await thunk(dispatchMock)
		expect(dispatchMock).toHaveBeenCalledTimes(1)
	})

	test("thunk searchPlanets should dispatch 1 action", async () => {
		const thunk = searchPlanets("Tatooine")

		const dispatchMock = jest.fn()

		await thunk(dispatchMock)
		expect(dispatchMock).toHaveBeenCalledTimes(1)
	})

	test("thunk searchGlobal should dispatch 8 thunks", async () => {
		const thunk = searchGlobal("123")

		const dispatchMock = jest.fn()

		await thunk(dispatchMock)
		expect(dispatchMock).toHaveBeenCalledTimes(8)
	})
})
