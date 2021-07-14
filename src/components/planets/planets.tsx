import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPlanetsTC} from '../../redux/planets-reducer/planets-reducer';
import {planetsSelector} from '../../redux/planets-reducer/planets-selector';
import style from '../charachters/characters.module.scss';
import {Link} from 'react-router-dom';
import PlanetsList from './planet-list/planets-list';



const Planets = () => {

    const dispatch = useDispatch()
    const planets = useSelector(planetsSelector)
    useEffect(() => {
        dispatch(getPlanetsTC())

    }, [dispatch])
    return (
        <div>
            <div className={style.mainBlock}>
                <div className={style.container}>
                    <Link to="/">Main</Link>
                    {planets.map((p) =>
                        <div className={style.item}>
                            <PlanetsList name={p.name}
                                         diameter={p.diameter}
                                         population={p.population}
                                         climate={p.climate}
                                         gravity={p.gravity}
                                         rotationPeriod={p.rotation_period}
                                         id = {p.id}
                            />
                        </div>
                    )}


                </div>
            </div>
        </div>
    );
};

export default Planets;