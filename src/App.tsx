import React from 'react';
import Header from "./components/header/header";
import {BrowserRouter, Link, Route} from "react-router-dom";
import style from "./App.module.scss";
import Characters from "./components/charachters/characters";


const App = () => {


    return (
        <div>
            <Header/>
            <BrowserRouter>
                <div className={style.container}>
                    <div className={style.characters}>
                        <Link to='/characters'>Characters</Link>
                    </div>
                    <div className={style.planets}>
                        <Link to='/planets'>Planets</Link>
                    </div>
                    <div className={style.starships}>
                        <Link to='/starships'>Starships</Link>
                    </div>
                    <Route path='/characters' render={() => <Characters/>}/>
                    {/*<Route path='/planets' render={() => <Planets/>}/>*/}
                    {/*<Route path='/starships' render={() => <Starships/>}/>*/}
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;