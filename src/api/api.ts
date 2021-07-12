import axios from 'axios';


const settings = {
    baseURL: 'https://swapi.dev/api/'
}

const instance = axios.create(settings)


const api = {

    getAllPerson: () => {
        return instance.get<PeopleT>(`people/`)
    },
    getPerson: (id: number) => {
        return instance.get(`people/${id}/`)
    },
    getAllPlanets: () => {
        return instance.get<PlanetsT>(`planets/`)
    },
    getPlanet: (id: number) => {
        return instance.get(`planets/${id}/`)
    },
    getAllStarships: () => {
        return instance.get(`starships/`)
    },
    getStarship: (id: number) => {
        return instance.get(`starships/${id}/`)
    }
}

export default api


export type PeopleT = {
    results: Array<ResponsePeopleT>
}

export type ResponsePeopleT = {
    name: string
    height: string
    birth_year: string
    gender: string
    hair_color: string
    mass: string
    url: string
    id: number
}

export type PlanetsT = {
    results: Array<PlanetsResponseT>
}

export type PlanetsResponseT = {
    name: string
    rotation_period: string
    orbital_period: string
    diameter: string
    climate: string
    gravity: string
    terrain: string
    surface_water: string
    population: string
    residents: Array<string>
    films: Array<string>
    url: string
    id: number
}
