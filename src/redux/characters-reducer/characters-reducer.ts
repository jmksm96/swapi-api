import {Dispatch} from 'redux';
import api from '../../api/api';
import {getIdFromUrl} from '../../helpers/getID';
import {ResponseCharactersType} from '../../api/api-typing';


const initialState: initialStateT = {
    characters: []
}

export const charactersReducer = (state = initialState, action: CharactersActionsT) => {
    switch (action.type) {
        case 'SET-CHARACTERS': {
            return {
                ...state,
                characters: action.characters.map((r) => ({...r, id: getIdFromUrl(r.url)}))
            }
        }
        default:
            return state
    }

}

//typing

type initialStateT = {
    characters: Array<ResponseCharactersType>
}

export type CharactersActionsT = {
    type: 'SET-CHARACTERS'
    characters: Array<ResponseCharactersType>
}

//actions

const setCharactersAC = (characters: Array<ResponseCharactersType>) => {
    return {
        type: 'SET-CHARACTERS',
        characters: characters
    } as const
}


//thunks


export const getCharactersTC = () => {
    return async (dispatch: Dispatch) => {
        let characters = await api.getAllCharacters()
        dispatch(setCharactersAC(characters.data.results))
    }
}