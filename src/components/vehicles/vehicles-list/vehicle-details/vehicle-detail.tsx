import React from 'react';
import {VehiclesPropsType} from '../vehicles-list';
import style from '../../../charachters/character-details/person-details.module.scss';

const VehicleDetail: React.FC<VehiclesPropsType> = (props) => {
    return (
        <div>
            <div className={style.img}>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.id}.jpg`} alt=""/>
            </div>
            <div className={style.details}>
                <h4>{props.name}</h4>
                <ul>
                    <li>Model: {props.model}</li>
                    <li>Manufacturer: {props.manufacturer}</li>
                    <li>Class: {props.vehicle_class}</li>
                    <li>Cost: {props.cost_in_credits}</li>
                    <li>Speed: {props.max_atmosphering_speed}</li>
                    <li>Length: {props.length}</li>
                    <li>Cargo Capacity: {props.cargo_capacity}</li>
                    <li>Minimum Crew: {props.crew}</li>
                    <li>Passengers: {props.passengers}</li>
                </ul>
            </div>
        </div>
    );
};

export default VehicleDetail;