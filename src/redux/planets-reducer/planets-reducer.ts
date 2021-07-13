import {Dispatch} from 'redux';
import api from '../../api/api';
import {PlanetsResponseType} from '../../api/api-typing';
import {getIdFromUrl} from '../../helpers/getID';


const initialState: initialStateT = {
    planets: []
}

export const planetsReducer = (state = initialState, action: PlanetActionsType) => {
    switch (action.type) {
        case 'SET-PLANETS': {
            return {
                ...state,
                planets: action.planets.map((r) => ({...r, id: getIdFromUrl(r.url)}))
            }
        }
        default:
            return state
    }

}

//typing

type initialStateT = {
    planets: Array<PlanetsResponseType>
}

export type PlanetActionsType = {
    type: 'SET-PLANETS'
    planets: Array<PlanetsResponseType>
}

//actions

const setPlanetsAC = (planets: Array<PlanetsResponseType>) => {
    return {
        type: 'SET-PLANETS',
        planets: planets
    } as const
}


//thunks

export const getPlanetsTC = () => {
    return async (dispatch: Dispatch) => {
        let planets = await api.getAllPlanets()
        dispatch(setPlanetsAC(planets.data.results))
    }
}