import {Dispatch} from 'redux';
import api, {ResponsePeopleT} from '../../api/api';
import {getIdFromUrl} from '../../helpers/getID';


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
    characters: Array<ResponsePeopleT>
}

export type CharactersActionsT = {
    type: 'SET-CHARACTERS'
    characters: Array<ResponsePeopleT>
}

//actions

const setCharactersAC = (characters: Array<ResponsePeopleT>) => {
    return {
        type: 'SET-CHARACTERS',
        characters: characters
    } as const
}


//thunks


export const getCharactersTC = () => {
    return async (dispatch: Dispatch) => {
        let characters = await api.getAllPerson()
        dispatch(setCharactersAC(characters.data.results))
    }
}