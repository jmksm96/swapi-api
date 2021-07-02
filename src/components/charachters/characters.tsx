import React, {useEffect, useState} from 'react';
import api, {ResponsePeopleType} from "../../api/api";
import Character from "./character/character";


const Characters = () => {

    const [state, setState] = useState<Array<ResponsePeopleType>>([])

    useEffect(() => {
        api.getAllPeople().then((res) => {
            setState(res.data.results)
        })
    }, [])

    return (
        <div>
            {state.map((p) =>
               ( <Character name={p.name}
                            gender = {p.gender}
                            birthYear={p.birth_year}
                            height = {p.height}
                            hairColor = {p.hair_color}/>)
            )}
        </div>
    );
}

export default Characters;