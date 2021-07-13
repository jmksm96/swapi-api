import {AppStateType} from '../store';


export const filmsSelector = (state: AppStateType) => {
    return state.films.films
}