import React, {useEffect, useState} from 'react';
import style from './person-details.module.scss'
import api from "../../api/api";

type PersonType = {
    name: string
    gender: string
    birthYear: string
    eyeColor: string
}


const PersonDetails = () => {


    const [state, setState] = useState<PersonType>({name: '', birthYear: '', eyeColor: '', gender: ''})
    const [id, setId] = useState<number>()


    useEffect(() => {
        const id = 1
        api.getPeople(id).then((res) => {
            setState({
                name: res.data.name,
                birthYear: res.data.birth_year,
                eyeColor: res.data.eye_color,
                gender: res.data.gender
            })
            setId(id)
        })
    }, [])


    return (
        <div className={style.container}>
            <div className={style.information}>
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    alt=""/>
                <div className={style.description}>
                    <h4>{state.name}</h4>
                    <div> Gender: {state.gender}</div>
                    <div>Birth Year: {state.birthYear}</div>
                    <div>Eye Color: {state.eyeColor}</div>
                </div>

            </div>
        </div>
    );
};

export default PersonDetails;