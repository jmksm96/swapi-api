import React from 'react';
import style from '../../charachters/person-details/person-details.module.scss';


type PropsType = {
    name: string
    diameter: string
    population: string
    climate: string
    gravity: string
    rotationPeriod: string
    id: number
}

const SelectedPlanetDetails = (props:PropsType) => {
    const {name, diameter, population, climate, gravity, rotationPeriod, id,} = props
    return (
        <div>
            <div className={'style.img'}>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            </div>

            <div className={style.details}>
                <h4>{name}</h4>
                <ul>
                    <li>Name: {name}</li>
                    <li>Diameter: {diameter}</li>
                    <li>Population: {population}</li>
                    <li>Climate: {climate}</li>
                    <li>Gravity: {gravity}</li>
                    <li>Rotation Period: {rotationPeriod}</li>
                </ul>
            </div>

        </div>
    );
};

export default SelectedPlanetDetails;