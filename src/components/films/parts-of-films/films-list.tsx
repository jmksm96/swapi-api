import React from 'react';
import {FilmsResponseType} from '../../../api/api-typing';
import {Link, Route} from 'react-router-dom';
import Film from './selected-film/film';
import style from './films-list.module.scss'

type PropsType = FilmsResponseType

const FilmsList: React.FC<PropsType> = (props) => {
    const {title, id} = props
    return (
        <div className={style.mainBlock}>
            <Route exact path="/films/" render={() =>
                <div className={style.items}>
                    <Link to={'/films/' + id} className={style.link}>
                        {title}
                        <img className={style.img}
                             src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} alt=""/>
                    </Link>
                </div>}
            />

            <div className={style.container}>

                <Route path={'/films/' + id} render={() => <Film id={props.id}
                                                                 characters={props.characters}
                                                                 director={props.director}
                                                                 opening_crawl={props.opening_crawl}
                                                                 planets={props.planets}
                                                                 episode_id={props.episode_id}
                                                                 producer={props.producer}
                                                                 release_date={props.release_date}
                                                                 species={props.species}
                                                                 starships={props.starships}
                                                                 title={props.title}
                                                                 url={props.url}
                                                                 vehicles={props.vehicles}/>}/>
            </div>
        </div>
    );
};


export default FilmsList;