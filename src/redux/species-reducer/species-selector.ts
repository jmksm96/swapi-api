import {AppStateType} from '../store';


export const speciesSelector = (state: AppStateType) => {
    return state.species.species
}