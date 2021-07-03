import React, {useEffect, useState} from 'react';
import api, {ResponsePeopleType} from "../../api/api";
import Character from "./character/character";
import style from './characters.module.scss'
import {Link} from "react-router-dom";

const getIdfromUrl = (url?: string): number => {
    if (!url) return -1;
    let arr = url.split('/');
    let id = arr[arr.length - 1];
    return +id;

}

const Characters = () => {

    const [state, setState] = useState<Array<ResponsePeopleType>>([])
    const [id, setId] = useState()

    useEffect(() => {
        api.getAllPerson().then((res) => {
                setState(res.data.results.map(r => ({...r, id: getIdfromUrl(r.url)})))

            },
        )
    }, [])



    return (
        <div className={style.container}>
            <Link to='/'>Main</Link>
            {state.map((p) =>
                (<Character name={p.name}
                            p={p}
                            gender={p.gender}
                            birthYear={p.birth_year}
                            height={p.height}
                            hairColor={p.hair_color}/>)
            )}
        </div>
    );
}

export default Characters;