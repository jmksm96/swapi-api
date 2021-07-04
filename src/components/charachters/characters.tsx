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

type DataType = {
    name: string
    height: string
    birth_year: string
    gender: string
    hair_color: string
    mass: string
    url: string
    id: number
}

const Characters = () => {

    const [state, setState] = useState<Array<ResponsePeopleType>>([])
    // const [data, setData] = useState<DataType>({
    //     name: '',
    //     birth_year: '',
    //     url: '',
    //     gender: '',
    //     height: '',
    //     mass: '',
    //     hair_color: '',
    //     id: NaN
    // })

    useEffect(() => {
        api.getAllPerson().then((res) => {
                setState(res.data.results.map(r => ({...r, id: getIdFromUrl(r.url)})))
            },
        )
    }, [])


    return (
        <div>
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
        </div>

    );
}

export default Characters;



