import React from 'react';
import {Link, Route} from 'react-router-dom';
import style from '../../charachters/characters-list/character.module.scss';
import StarshipDetails from '../../starships/starships-list/starship-details/starship-details';
import VehicleDetail from './vehicle-details/vehicle-detail';


export type VehiclesPropsType = {
    name: string
    model: string
    manufacturer: string
    cost_in_credits: string
    length: string
    max_atmosphering_speed: string
    crew: string
    passengers: string
    cargo_capacity: string
    consumables: string
    vehicle_class: string
    pilots: Array<string>
    films: Array<string>
    url: string
    id: number
}

const VehiclesList: React.FC<VehiclesPropsType> = (props) => {
   const {name, id} = props
    return (
        <div>
            <Route exact path="/vehicles/" render={() =>
                <Link to={'/vehicles/' + id} className={style.link}>
                    {name}
                    <img className={style.img}
                         src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} alt=""/>
                </Link>
            }/>

            <Route path={'/vehicles/' + id} render={() => <VehicleDetail id={props.id}
                                                                         name={props.name}
                                                                         cargo_capacity={props.cargo_capacity}
                                                                         consumables={props.consumables}
                                                                         cost_in_credits={props.cost_in_credits}
                                                                         crew={props.crew}
                                                                         films={props.films}
                                                                         pilots={props.pilots}
                                                                         passengers={props.passengers}
                                                                         model={props.model}
                                                                         max_atmosphering_speed={props.max_atmosphering_speed}
                                                                         manufacturer={props.manufacturer}
                                                                         length={props.length}
                                                                         url={props.url}
                                                                         vehicle_class={props.vehicle_class}/>}/>

        </div>
    );
};

export default VehiclesList;