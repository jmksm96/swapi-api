import React, {useEffect} from 'react';
import Character from './character/character';
import style from './characters.module.scss'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getCharactersTC} from '../../redux/characters-reducer/character-reducer';
import {charactersSelector} from '../../redux/characters-reducer/character-selector';


const Characters = () => {

    const dispatch = useDispatch()
    const characters = useSelector(charactersSelector)
    useEffect(() => {
        dispatch(getCharactersTC())
    }, [])



    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <Link to="/">Main</Link>
                {characters.map((c) =>
                    <div className={style.item}>
                        <Character name={c.name}
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


//
// <div className={style.container}>
//     <Link to='/'>Main</Link>
//     {state.map((p) =>
//         (<Character name={p.name}
//                     gender={p.gender}
//                     birthYear={p.birth_year}
//                     height={p.height}
//                     hairColor={p.hair_color}
//                     id={p.id}/>)
//     )}
//
// </div>