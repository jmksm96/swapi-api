import React from 'react';
import style from './planets-detail/planets-detail.module.scss'
import {Link, Route} from 'react-router-dom';
import PlanetDetail from './planets-detail/planet-detail';


type PropsType = {
    name: string
    diameter: string
    population: string
    climate: string
    gravity: string
    rotationPeriod: string
    id: number
}

const PlanetsList = (props: PropsType) => {
    const {name, id} = props
    return (
        <div className={style.planets}>
            <Route exact path="/planets/" render={() =>
                <div className={style.items}>
                    <Link to={'/planets/' + id} className={style.link}>
                        {name}
                        <img className={style.img}
                             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
                    </Link>
                </div>}
            />

            <Route path={'/planets/' + id} render={() => <PlanetDetail id={props.id}
                                                                       name={props.name}
                                                                       diameter={props.diameter}
                                                                       population={props.population}
                                                                       rotationPeriod={props.rotationPeriod}
                                                                       climate={props.climate}
                                                                       gravity={props.gravity}/>}/>


        </div>
    );
};

export default PlanetsList;