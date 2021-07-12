import {AppStateType} from '../store';


export const planetsSelector = (state: AppStateType) => {
    return state.planets.planets
}