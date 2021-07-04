import React from 'react';
import style from './person-details.module.scss'
import {CharacterPropsType} from "../charachters/character/character";


const PersonDetails: React.FC<CharacterPropsType> = (props) => {

    const {name, gender, birthYear, hairColor, height, id} = props

    return (
        <div className={style.container}>
            <div className={style.img}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
            </div>

            <div className={style.details}>
                <h4>{name}</h4>
                <ul>
                    <li>Gender: {gender}</li>
                    <li>Birth Year: {birthYear}</li>
                    <li>Hair Color: {hairColor}</li>
                    <li>Height: {height}</li>
                </ul>
            </div>

        </div>
    );
};

export default PersonDetails;