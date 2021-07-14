import React, {useEffect} from 'react';
import CharactersList from './characters-list/characters-list';
import style from './characters.module.scss'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getCharactersTC} from '../../redux/characters-reducer/characters-reducer';
import {charactersSelector} from '../../redux/characters-reducer/characters-selector';

const Characters = () => {


    const dispatch = useDispatch()
    const characters = useSelector(charactersSelector)

    useEffect(() => {
        dispatch(getCharactersTC())
    }, [dispatch])




    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <Link to="/">Main</Link>
                {characters.map((c) =>
                    <div className={style.item}>
                        <CharactersList name={c.name}
                                        gender={c.gender}
                                        birthYear={c.birth_year}
                                        height={c.height}
                                        hairColor={c.hair_color}
                                        id={c.id}
                        />
                    </div>
                )}


            </div>

        </div>

    );
}

export default Characters;


