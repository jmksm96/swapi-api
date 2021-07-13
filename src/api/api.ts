import axios from 'axios';
import {
    CharactersType,
    FilmsType,
    PlanetsType,
    ResponseCharactersType,
    SpeciesType,
    StarshipsType,
    VehiclesType
} from './api-typing';


const settings = {
    baseURL: 'https://swapi.dev/api/'
}

const instance = axios.create(settings)


const api = {

    getAllCharacters: () => {
        return instance.get<CharactersType>(`people/`)
    },
    getCharacter: (id: number) => {
        return instance.get<ResponseCharactersType>(`people/${id}/`)
    },
    getAllPlanets: () => {
        return instance.get<PlanetsType>(`planets/`)
    },
    getPlanet: (id: number) => {
        return instance.get(`planets/${id}/`)
    },
    getAllStarships: () => {
        return instance.get<StarshipsType>(`starships/`)
    },
    getStarship: (id: number) => {
        return instance.get(`starships/${id}/`)
    },
    getAllFilms: () => {
        return instance.get<FilmsType>(`films/`)
    },
    getFilm: (id: number) => {
        return instance.get(`films/${id}/`)
    },
    getAllSpecies: () => {
        return instance.get<SpeciesType>(`species/`)
    },
    getSpecies: (id: number) => {
        return instance.get(`species/${id}/`)
    },
    getAllVehicles: () => {
        return instance.get<VehiclesType>(`vehicles/`)
    },
    getVehicle: (id: number) => {
        return instance.get(`vehicles/${id}/`)
    },
}

export default api

//Types

