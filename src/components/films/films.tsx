import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filmsSelector} from '../../redux/films-reducer/films-selector';
import {getFilmsTC} from '../../redux/films-reducer/films-reducer';
import {Link} from 'react-router-dom';
import FilmsList from './parts-of-films/films-list';


const Films = () => {

    const dispatch = useDispatch()
    const films = useSelector(filmsSelector)
    useEffect(() => {
        dispatch(getFilmsTC())
    }, [dispatch])

    return (
        <div>
            <Link to="/">Main</Link>
            {films.map((f) =>
                <div className={'s'}>
                    <FilmsList id={f.id}
                               characters={f.characters}
                               director={f.director}
                               opening_crawl={f.opening_crawl}
                               planets={f.planets}
                               episode_id={f.episode_id}
                               producer={f.producer}
                               release_date={f.release_date}
                               species={f.species}
                               starships={f.starships}
                               title={f.title}
                               url={f.url}
                               vehicles={f.vehicles}/>
                </div>
            )}
        </div>
    );
};

export default Films;