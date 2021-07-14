import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {starshipsSelector} from '../../redux/starships-reducer/starships-selector';
import {getStarshipsTC} from '../../redux/starships-reducer/starships-reducer';
import {Link} from 'react-router-dom';
import StarshipsList from './starships-list/starships-list';


const Starships = () => {

    const dispatch = useDispatch()
    const starships = useSelector(starshipsSelector)

    useEffect(() => {
        dispatch(getStarshipsTC())
    }, [dispatch])

    return (
        <div>
            <Link to="/">Main</Link>
            {starships.map((s) =>
                <div>
                    <StarshipsList id={s.id}
                                   name={s.name}
                                   cargo_capacity={s.cargo_capacity}
                                   consumables={s.consumables}
                                   cost_in_credits={s.cost_in_credits}
                                   crew={s.crew}
                                   films={s.films}
                                   hyperdrive_rating={s.hyperdrive_rating}
                                   length={s.length}
                                   manufacturer={s.manufacturer}
                                   max_atmosphering_speed={s.max_atmosphering_speed}
                                   MGLT={s.MGLT}
                                   model={s.model}
                                   passengers={s.passengers}
                                   pilots={s.pilots}
                                   starship_class={s.starship_class}/>
                </div>
            )}
        </div>
    );
};

export default Starships;