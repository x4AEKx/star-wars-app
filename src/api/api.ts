import axios from "axios"

export const instance = axios.create({
	baseURL: "https://swapi.dev/api/",
})

export const searchAPI = {
	async searchPeople(search: string) {
		const { data } = await instance.get(`people/?search=${search}`)
		return data
	},
	async searchFilm(search: string) {
		const { data } = await instance.get(`films/?search=${search}`)
		return data
	},
	async searchStarships(search: string) {
		const { data } = await instance.get(`starships/?search=${search}`)
		return data
	},
	async searchVehicles(search: string) {
		const { data } = await instance.get(`vehicles/?search=${search}`)
		return data
	},
	async searchSpecies(search: string) {
		const { data } = await instance.get(`species/?search=${search}`)
		return data
	},
	async searchPlanets(search: string) {
		const { data } = await instance.get(`planets/?search=${search}`)
		return data
	},
}
