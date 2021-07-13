import React from 'react';
import {Link, Route} from 'react-router-dom';
import style from './character.module.scss'
import PersonDetails from '../person-details/person-details';


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
        <div className={style.container}>
            <Route exact path="/characters/" render={() =>
                <div className={style.items}>
                    <Link to={'/character/' + id} className={style.link}>
                        {name}
                        <img className={style.img}
                             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
                    </Link>
                </div>}
            />

            <Route path={'/character/' + id} render={() => <PersonDetails name={name}
                                                                          key={id}
                                                                          birthYear={birthYear}
                                                                          gender={gender}
                                                                          hairColor={hairColor}
                                                                          height={height}
                                                                          id={id}/>}/>

        </div>

    );
};

export default Character;

