import axios from "axios";


const settings = {
    baseURL: 'https://swapi.dev/api/'

}
const instance = axios.create(settings)

const api = {

    getAllPeople: () => {
        return instance.get<PeopleType>(`people/`)
    },
    getPeople: (id: number) => {
        return instance.get(`people/${id}/`)
    },
    getAllPlanets: () => {
        return instance.get(`planets/`)
    },
    getPlanet: (id: number) => {
        return instance.get(`planets/${id}/`)
    },
    getAllStarships: () => {
        return instance.get(`starships/`)
    },
    getStarship: (id: number) => {
        return instance.get(`starships/${id}/`)
    },


}

export default api

export type PeopleType = {
    results: Array<ResponsePeopleType>
}

export type ResponsePeopleType = {
    name: string
    height: string
    birth_year: string
    gender: string
    hair_color: string
    mass: string

}
