import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import style from './character.module.scss'
import PersonDetails from "../../person-details/person-details";


type PropsType = {
    name: string
    gender: string
    birthYear: string
    height: string
    hairColor: string
}

const id = [{
    id1: 1,
    id2: 2,
    id3: 3,
    id4: 4,
    id5: 5,
    id6: 6,
    id7: 7,
    id8: 8,
    id9: 9,
    id10: 10
}

]
const idMapped = id.map((ids) => (
    <img src={`https://starwars-visualguide.com/assets/img/characters/${ids}.jpg`} alt=""/>
))
console.log(idMapped)

const Character: React.FC<PropsType> = (props) => {
    return (
        <div className={style.character}>
            <BrowserRouter>
                <Link to='/person_details/:id'>
                    {props.name}
                </Link>
                <Route path='/person_details/' render={() => <PersonDetails name={props.name}
                                                                           birthYear={props.birthYear}
                                                                           gender={props.gender}
                                                                           hairColor={props.hairColor}
                                                                           height={props.height}/>}/>
            </BrowserRouter>
        </div>
    );
};

export default Character;

