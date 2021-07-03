import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import s from './header.module.scss'

const Header = () => {
    return (
        <div className={s.main}>
            <BrowserRouter>
                <h3>
                        <a href="#">StarDB</a>
                </h3>
            </BrowserRouter>
        </div>
    );
};

export default Header;