import React from 'react';
import style from './Planets-detail.module.scss'
import {Link, Route} from 'react-router-dom';
import SelectedPlanetDetails from './selected-planet-details';


type PropsType = {
    name: string
    diameter: string
    population: string
    climate: string
    gravity: string
    rotationPeriod: string
    id: number
}

const PlanetDetail = (props: PropsType) => {
    const {name, id} = props
    return (
        <div className={style.planets}>
            <Link to={'/planet/' + id}>
                {name}
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            </Link>

            <Link to={'/planet/' + id}>

            </Link>

            <Route path={'/planet/' + id} render={() => <SelectedPlanetDetails id={props.id}
                                                                               name={props.name}
                                                                               diameter={props.diameter}
                                                                               population={props.population}
                                                                               rotationPeriod={props.rotationPeriod}
                                                                               climate={props.climate}
                                                                               gravity={props.gravity}/>}/>


        </div>
    );
};

export default PlanetDetail;