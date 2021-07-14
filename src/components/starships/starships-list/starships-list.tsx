import React from 'react';
import {Link, Route} from 'react-router-dom';
import style from '../../charachters/characters-list/character.module.scss';
import StarshipDetails from './starship-details/starship-details';

export type StarshipsPropsType = {
    name: string
    model: string
    starship_class: string
    manufacturer: string
    cost_in_credits: string
    length: string
    crew: string
    passengers: string
    max_atmosphering_speed: string
    hyperdrive_rating: string
    MGLT: string
    cargo_capacity: string
    consumables: string
    films: Array<string>
    pilots: Array<string>
    id: number
}

const StarshipsList: React.FC<StarshipsPropsType> = (props) => {
    const {name, id} = props
    return (
        <div>
            <Route exact path="/starships/" render={() =>
                <Link to={'/starships/' + id} className={style.link}>
                    {name}
                    <img className={style.img}
                         src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt=""/>
                </Link>
            }
            />
            <div className={style.item}>
                <Route path={'/starships/' + id} render={() => <StarshipDetails name={props.name}
                                                                                cargo_capacity={props.cargo_capacity}
                                                                                consumables={props.consumables}
                                                                                cost_in_credits={props.cost_in_credits}
                                                                                crew={props.crew}
                                                                                films={props.films}
                                                                                hyperdrive_rating={props.hyperdrive_rating}
                                                                                length={props.length}
                                                                                manufacturer={props.manufacturer}
                                                                                max_atmosphering_speed={props.max_atmosphering_speed}
                                                                                MGLT={props.MGLT}
                                                                                model={props.model}
                                                                                passengers={props.passengers}
                                                                                pilots={props.pilots}
                                                                                starship_class={props.starship_class}
                                                                                id={props.id}/>}/>
            </div>
        </div>
    );
};

export default StarshipsList