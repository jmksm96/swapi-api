import {AppStateType} from '../store';


export const vehiclesSelector = (state: AppStateType) => {
    return state.vehicles.vehicles
}