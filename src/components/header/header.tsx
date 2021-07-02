import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import s from './header.module.scss'
import Characters from "../charachters/characters";

const Header = () => {
    return (
        <div className={s.main}>
            <BrowserRouter>
                <h3>
                        <a href="#">StarDB</a>
                </h3>
                {/*<div className={s.links}>*/}

                {/*    <a href="#">People</a>*/}

                {/*    <a href="#">Planets</a>*/}

                {/*    <a href="#">Starships</a>*/}

                {/*</div>*/}
            </BrowserRouter>
        </div>
    );
};

export default Header;