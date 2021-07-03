import axios from "axios";


const settings = {
    baseURL: 'https://swapi.dev/api/'
}

const settingsImg = {
    baseURL: 'https://starwars-visualguide.com/assets/img/'
}

const instance = axios.create(settings)
const instanceImg = axios.create(settingsImg)

const api = {

    getAllPerson: () => {
        return instance.get<PeopleType>(`people/`)
    },
    getPerson: (id: number) => {
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
    getPersonImg:(id: number) => {
        return instanceImg.get<ImageType>(`characters/${id}.jpg`)
    },
    getPlanetImg: (id: number) => {
        return instanceImg.get(`planets/${id}.jpg`)
    },
    getStarshipsImg: (id: number) => {
        return instanceImg.get(`starships/${id}.jpg`)
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
    url: string
}

export type ImageType = {
    image: File
}