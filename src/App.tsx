import React from 'react';
import Particles from 'react-particles-js';
import {Link, Route, Switch} from 'react-router-dom';
import style from './App.module.scss';
import Characters from './components/charachters/characters';


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
                    {/*<Route path='/planets' render={() => <Planets/>}/>*/}
                    {/*<Route path='/starships' render={() => <Starships/>}/>*/}

                </Switch>
            </div>
        </div>
    );
};

export default App;