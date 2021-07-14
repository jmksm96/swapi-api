import {Dispatch} from 'redux';
import api from '../../api/api';
import {StarshipsResponseType} from '../../api/api-typing';
import {getIdFromUrl} from '../../helpers/getID';


const initialState: initialStateT = {
    starships: []
}

export const starshipsReducer = (state = initialState, action: StarshipsActionsT) => {
    switch (action.type) {
        case 'SET-STARSHIPS': {
            return {
                ...state,
                starships: action.starships.map((r) => ({...r, id: getIdFromUrl(r.url)}))
            }
        }
        default:
            return state
    }

}

//typing

type initialStateT = {
    starships:  Array<StarshipsResponseType>
}

export type StarshipsActionsT = {
    type: 'SET-STARSHIPS'
    starships:  Array<StarshipsResponseType>
}

//actions

const setSpeciesAC = (starships:  Array<StarshipsResponseType>) => {
    return {
        type: 'SET-STARSHIPS',
        starships: starships
    } as const
}


//thunks

export const getStarshipsTC = () => {
    return async (dispatch: Dispatch) => {
        let starships = await api.getAllStarships()
        dispatch(setSpeciesAC(starships.data.results))
    }
}