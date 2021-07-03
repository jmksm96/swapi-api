import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import style from './character.module.scss'
import PersonDetails from "../../person-details/person-details";


type PropsType = {
    p: any
    name: string
    gender: string
    birthYear: string
    height: string
    hairColor: string
}

const Character: React.FC<PropsType> = (props) => {
    return (
        <div className={style.character}>
            <BrowserRouter>
                <Route exact path='/characters' render={() => <>
                    <Link to='/character'>
                        {props.name}
                    </Link>
                </>}/>

                <Route path='/character' render={() => <PersonDetails name={props.name}
                                                                            birthYear={props.birthYear}
                                                                            gender={props.gender}
                                                                            hairColor={props.hairColor}
                                                                            height={props.height}/>}/>
            </BrowserRouter>
        </div>
    );
};

export default Character;


// <BrowserRouter>
//     <Link to='/person_details/'>
//         {props.name}
//     </Link>
//     <Route path='/person_details/' render={() => <PersonDetails name={props.name}
//                                                                 birthYear={props.birthYear}
//                                                                 gender={props.gender}
//                                                                 hairColor={props.hairColor}
//                                                                 height={props.height}/>}/>
// </BrowserRouter>
