import {Dispatch} from 'redux';
import {getIdFromUrl} from '../../helpers/getID';
import {FilmsResponseType} from '../../api/api-typing';
import api from '../../api/api';


const initialState: initialStateT = {
    films: []
}

export const filmsReducer = (state = initialState, action: FilmsActionsT) => {
    switch (action.type) {
        case 'SET-FILMS': {
            return {
                ...state,
                films: action.films.map((r) => ({...r, id: getIdFromUrl(r.url)}))
            }
        }
        default:
            return state
    }

}

//typing

type initialStateT = {
    films: Array<FilmsResponseType>
}

export type FilmsActionsT = {
    type: 'SET-FILMS'
    films: Array<FilmsResponseType>
}

//actions

const setFilmsAC = (films: Array<FilmsResponseType>) => {
    return {
        type: 'SET-FILMS',
        films: films
    } as const
}


//thunks


export const getFilmsTC = () => {
    return async (dispatch: Dispatch) => {
        let films = await api.getAllFilms()
        dispatch(setFilmsAC(films.data.results))
    }
}