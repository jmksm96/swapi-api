import React from 'react';
import style from './person-details.module.scss'

type PropsType = {
    name: string
    gender: string
    birthYear: string
    height: string
    hairColor: string
}


const PersonDetails: React.FC<PropsType> = (props) => {
    return (
        <div className={style.container}>
            <h4>{props.name}</h4>
            <div> Gender: {props.gender}</div>
            <div>Birth Year: {props.birthYear}</div>
            <div>Hair Color: {props.hairColor}</div>
            <div>Height: {props.height}</div>
        </div>
    );
};

export default PersonDetails;