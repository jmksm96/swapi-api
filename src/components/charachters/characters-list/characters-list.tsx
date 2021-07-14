import React from 'react';
import {Link, Route} from 'react-router-dom';
import style from './character.module.scss'
import PersonDetails from '../character-details/person-details';


export type CharacterPropsType = {
    name: string
    gender: string
    birthYear: string
    height: string
    hairColor: string
    id: number
}


const CharactersList: React.FC<CharacterPropsType> = (props) => {
    const {name, gender, birthYear, height, hairColor, id} = props
    return (
        <div className={style.container}>
            <Route exact path="/characters/" render={() =>
                <Link to={'/characters/' + id} className={style.link}>
                    {name}
                    <img className={style.img}
                         src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
                </Link>
            }
            />

            <div className={style.item}>
                <Route path={'/characters/' + id} render={() => <PersonDetails name={name}
                                                                               key={id}
                                                                               birthYear={birthYear}
                                                                               gender={gender}
                                                                               hairColor={hairColor}
                                                                               height={height}
                                                                               id={id}/>}/>
            </div>


        </div>

    );
};

export default CharactersList;

