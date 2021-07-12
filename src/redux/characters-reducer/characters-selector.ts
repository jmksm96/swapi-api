import {AppStateType} from '../store';


export const charactersSelector = (state: AppStateType) => {
    return state.characters.characters
}