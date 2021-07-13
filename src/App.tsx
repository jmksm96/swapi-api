import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import style from './App.module.scss';
import Planets from './components/planets/planets';
import Characters from './components/charachters/characters';
import Films from './components/films/films';
import Starships from './components/starships/starships';
import Species from './components/species/species';
import Vehicles from './components/vehicles/vehicles';


const App = () => {
    return (
        <div className={style.mainBlock}>

            <div className={style.container}>
                <Switch>
                    <Route exact path="/" render={() => <div className={style.items}>
                        <Link to="/characters">
                            Characters
                            <img src="https://starwars-visualguide.com/assets/img/categories/character.jpg" alt=""/>
                        </Link>
                        <Link to="/films">
                            Films
                            <img src="https://starwars-visualguide.com/assets/img/categories/films.jpg" alt=""/>
                        </Link>
                        <Link to="/planets">
                            Planets
                            <img src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" alt=""/>
                        </Link>
                        <Link to="/starships">
                            Starships
                            <img src="https://starwars-visualguide.com/assets/img/categories/starships.jpg" alt=""/>
                        </Link>
                        <Link to="/vehicles">
                            Vehicles
                            <img src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" alt=""/>
                        </Link>
                        <Link to="/species">
                            Species
                            <img src="https://starwars-visualguide.com/assets/img/categories/species.jpg" alt=""/>
                        </Link>

                    </div>}/>
                    <Route path={['/characters', '/character']} render={() => <Characters/>}/>
                    <Route path="/planets" render={() => <Planets/>}/>
                    <Route path="/films" render={() => <Films/>}/>
                    <Route path="/starships" render={() => <Starships/>}/>
                    <Route path="/species" render={() => <Species/>}/>
                    <Route path="/vehicles" render={() => <Vehicles/>}/>

                </Switch>
            </div>
        </div>
    );
};

export default App;