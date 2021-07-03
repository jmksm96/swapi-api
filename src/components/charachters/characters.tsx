import React, {useEffect, useState} from 'react';
import api, {ResponsePeopleType} from "../../api/api";
import Character from "./character/character";
import style from './characters.module.scss'
import {Link} from "react-router-dom";

const getIdFromUrl = (url?: string): number => {
    if (!url) return -1;
    let arr = url.split('/');
    let id = arr[arr.length - 2];
    return (+id);
}

const Characters = () => {

    const [state, setState] = useState<Array<ResponsePeopleType>>([])

    useEffect(() => {
        api.getAllPerson().then((res) => {
                setState(res.data.results.map(r => ({...r, id: getIdFromUrl(r.url)})))
            },
        )
    }, [])

    console.log(state)

    return (
        <div className={style.container}>
            <Link to='/'>Main</Link>
            {state.map((p) =>
                (<Character name={p.name}
                            gender={p.gender}
                            birthYear={p.birth_year}
                            height={p.height}
                            hairColor={p.hair_color}
                            id={p.id}/>)
            )}
        </div>
    );
}

export default Characters;