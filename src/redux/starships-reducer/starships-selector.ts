import {AppStateType} from '../store';


export const starshipsSelector = (state: AppStateType) => {
    return state.starships.starships
}