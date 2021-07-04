import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import style from './character.module.scss'
import PersonDetails from "../../person-details/person-details";


export type CharacterPropsType = {
    name: string
    gender: string
    birthYear: string
    height: string
    hairColor: string
    id: number
}


const Character: React.FC<CharacterPropsType> = (props) => {
    const {name, gender, birthYear, height, hairColor, id} = props
    return (
        <div className={style.character}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/characters/' render={() => <div className={style.link}>
                        <Link to={'/character/' + id}>
                            {name}
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
                        </Link>
                    </div>}/>

                    <Route path={'/character/' + id} render={() => <PersonDetails name={name}
                                                                                  key={id}
                                                                                  birthYear={birthYear}
                                                                                  gender={gender}
                                                                                  hairColor={hairColor}
                                                                                  height={height}
                                                                                  id={id}/>}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Character;
