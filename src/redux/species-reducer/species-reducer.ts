import {Dispatch} from 'redux';
import api from '../../api/api';
import {SpeciesResponseType} from '../../api/api-typing';
import {getIdFromUrl} from '../../helpers/getID';


const initialState: initialStateT = {
    species: []
}

export const speciesReducer = (state = initialState, action: SpeciesActionsT) => {
    switch (action.type) {
        case 'SET-SPECIES': {
            return {
                ...state,
                species: action.species.map((r) => ({...r, id: getIdFromUrl(r.url)}))
            }
        }
        default:
            return state
    }

}

//typing

type initialStateT = {
    species: Array<SpeciesResponseType>
}

export type SpeciesActionsT = {
    type: 'SET-SPECIES'
    species: Array<SpeciesResponseType>
}

//actions

const setSpeciesAC = (species: Array<SpeciesResponseType>) => {
    return {
        type: 'SET-SPECIES',
        species: species
    } as const
}


//thunks

export const getPlanetsTC = () => {
    return async (dispatch: Dispatch) => {
        let species = await api.getAllSpecies()
        dispatch(setSpeciesAC(species.data.results))
    }
}