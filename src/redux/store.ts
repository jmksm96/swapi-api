import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {charactersReducer} from './characters-reducer/characters-reducer';
import {planetsReducer} from './planets-reducer/planets-reducer';
import {filmsReducer} from './films-reducer/films-reducer';
import {starshipsReducer} from './starships-reducer/starships-reducer';
import {speciesReducer} from './species-reducer/species-reducer';
import {vehiclesReducer} from './vehicles-reducer/vehicles-reducer';


export const rootReducer = combineReducers({
    characters: charactersReducer,
    planets: planetsReducer,
    films: filmsReducer,
    starships: starshipsReducer,
    species: speciesReducer,
    vehicles: vehiclesReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store;
