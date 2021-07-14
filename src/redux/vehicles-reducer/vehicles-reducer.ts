import {Dispatch} from 'redux';
import api from '../../api/api';
import {VehiclesResponseType} from '../../api/api-typing';
import {getIdFromUrl} from '../../helpers/getID';


const initialState: initialStateT = {
    vehicles: []
}

export const vehiclesReducer = (state = initialState, action: VehiclesActionsT) => {
    switch (action.type) {
        case 'SET-VEHICLES': {
            return {
                ...state,
                vehicles: action.vehicles.map((r) => ({...r, id: getIdFromUrl(r.url)}))
            }
        }
        default:
            return state
    }

}

//typing

type initialStateT = {
    vehicles:  Array<VehiclesResponseType>
}

export type VehiclesActionsT = {
    type: 'SET-VEHICLES'
    vehicles:  Array<VehiclesResponseType>
}

//actions

const setVehiclesAC = (vehicles:  Array<VehiclesResponseType>) => {
    return {
        type: 'SET-VEHICLES',
        vehicles: vehicles
    } as const
}


//thunks

export const getVehiclesTC = () => {
    return async (dispatch: Dispatch) => {
        let vehicles = await api.getAllVehicles()
        dispatch(setVehiclesAC(vehicles.data.results))
    }
}