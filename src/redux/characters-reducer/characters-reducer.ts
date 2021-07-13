import {Dispatch} from 'redux';
import api from '../../api/api';
import {getIdFromUrl} from '../../helpers/getID';
import {ResponseCharactersType} from '../../api/api-typing';


const initialState: initialStateT = {
    characters: [],
    count: 0
}

export const charactersReducer = (state = initialState, action: CharactersActionsType) => {
    switch (action.type) {
        case 'SET-CHARACTERS': {
            return {
                ...state,
                characters: action.characters.map((r) => ({...r, id: getIdFromUrl(r.url)}))
            }
        }
        case 'SET-COUNT': {
            return {
                ...state,
                count: action.count
            }
        }
        default:
            return state
    }

}

//typing

type initialStateT = {
    characters: Array<ResponseCharactersType>
    count: number
}

export type SetCharactersType = {
    type: 'SET-CHARACTERS'
    characters: Array<ResponseCharactersType>
}

export type PagesCountType = {
    type: 'SET-COUNT'
    count: number
}

type CharactersActionsType = SetCharactersType | PagesCountType

//actions

const setCharactersAC = (characters: Array<ResponseCharactersType>) => {
    return {
        type: 'SET-CHARACTERS',
        characters
    } as const
}
const setPagesCountAC = (count: number) => {
    return {
        type: 'SET-CHARACTERS',
        count
    } as const
}


//thunks

export const getCharactersTC = () => {
    return async (dispatch: Dispatch) => {
        let characters = await api.getAllCharacters()
        dispatch(setCharactersAC(characters.data.results))
    }

}

// export const getPagesCountTC = () => {
//     return async (dispatch: Dispatch) => {
//         let count = await api.getAllCharacters()
//         dispatch(setPagesCountAC(count.data.count))
//     }
// }