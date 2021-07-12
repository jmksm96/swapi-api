import {Dispatch} from 'redux';
import api, {ResponsePeopleType} from '../../api/api';
import {getIdFromUrl} from '../../helpers/getID';


const initialState: initialStateT = {
    characters: []
}

export const characterReducer = (state = initialState, action: CharactersActionsT) => {
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
    characters: Array<ResponsePeopleType>
}

export type CharactersActionsT = {
    type: 'SET-CHARACTERS'
    characters: Array<ResponsePeopleType>
}

//actions

const setCharactersAC = (characters: Array<ResponsePeopleType>) => {
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