import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {vehiclesSelector} from '../../redux/vehicles-reducer/vehicles-selector';
import {getVehiclesTC} from '../../redux/vehicles-reducer/vehicles-reducer';
import {Link} from 'react-router-dom';
import VehiclesList from './vehicles-list/vehicles-list';

const Vehicles = () => {

    const dispatch = useDispatch()
    const vehicles = useSelector(vehiclesSelector)

    useEffect(() => {
        dispatch(getVehiclesTC())
    }, [dispatch])


    return (
        <div>
            <Link to="/">Main</Link>
            {vehicles.map((v) => (
                <div>
                    <VehiclesList id={v.id}
                                  name={v.name}
                                  cargo_capacity={v.cargo_capacity}
                                  consumables={v.consumables}
                                  cost_in_credits={v.cost_in_credits}
                                  crew={v.crew}
                                  films={v.films}
                                  pilots={v.pilots}
                                  passengers={v.passengers}
                                  model={v.model}
                                  max_atmosphering_speed={v.max_atmosphering_speed}
                                  manufacturer={v.manufacturer}
                                  length={v.length}
                                  url={v.url}
                                  vehicle_class={v.vehicle_class}/>
                </div>
            ))}
        </div>
    );
};

export default Vehicles;