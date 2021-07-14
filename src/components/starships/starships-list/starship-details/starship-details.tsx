import React from 'react';
import {StarshipsPropsType} from '../starships-list';
import style from '../../../charachters/character-details/person-details.module.scss';

const StarshipDetails: React.FC<StarshipsPropsType> = (props) => {
    const {name, cargo_capacity, consumables, cost_in_credits, crew, films, hyperdrive_rating, length, manufacturer, max_atmosphering_speed, MGLT, model, passengers, pilots, starship_class, id
    } = props
    return (
        <div className={style.container}>
            <div className={style.img}>
                <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt=""/>
            </div>

            <div className={style.details}>
                <h4>{name}</h4>
                <ul>
                    <li>Model: {model}</li>
                    <li>Manufacturer: {manufacturer}</li>
                    <li>Class: {starship_class}</li>
                    <li>Cost: {cost_in_credits}</li>
                    <li>Speed: {max_atmosphering_speed}</li>
                    <li>Hyperdrive Rating: {hyperdrive_rating}</li>
                    <li>MGLT: {MGLT}</li>
                    <li>Length: {length}</li>
                    <li>Cargo Capacity: {cargo_capacity}</li>
                    <li>Minimum Crew: {crew}</li>
                    <li>Passengers: {passengers}</li>
                </ul>
            </div>

        </div>
    );
};

export default StarshipDetails;