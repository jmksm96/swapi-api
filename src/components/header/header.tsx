import React from 'react';
import s from './header.module.scss'

const Header = () => {
    return (
        <div className={s.main}>
            <h3>
                <a href="#">Star DB</a>
            </h3>
            <div className={s.links}>

                <a href="#">People</a>

                <a href="#">Planets</a>

                <a href="#">Starships</a>

            </div>
        </div>
    );
};

export default Header;