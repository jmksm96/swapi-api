import {Dispatch} from 'redux';
import api, {PlanetsResponseT} from '../../api/api';
import {getIdFromUrl} from '../../helpers/getID';


const initialState: initialStateT = {
    planets: []
}

export const planetsReducer = (state = initialState, action: CharactersActionsT) => {
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
    planets: Array<PlanetsResponseT>
}

export type CharactersActionsT = {
    type: 'SET-PLANETS'
    planets: Array<PlanetsResponseT>
}

//actions

const setPlanetsAC = (planets: Array<PlanetsResponseT>) => {
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