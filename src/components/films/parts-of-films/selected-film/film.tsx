import React from 'react';
import {FilmsResponseType} from '../../../../api/api-typing';
import style from './film.module.scss'

type PropsType = FilmsResponseType

const Film:React.FC<PropsType> = (props) => {
    const { title, episode_id, opening_crawl, director, producer , release_date , id, characters , planets, starships, vehicles , species } = props
    return (
        <div className={style.container}>
            <div className={style.img}>
                <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} alt=""/>
            </div>
            <div className={style.details}>
                <h3>{title}</h3>
                <ul>
                    <li><b>Date Created:</b> {release_date}</li>
                    <li><b>Director:</b> {director}</li>
                    <li><b>Producer(s):</b> {producer}</li>
                    <li><b>Opening Crawl:</b> {opening_crawl}</li>
                </ul>
            </div>

        </div>
    );
};

export default Film;