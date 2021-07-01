import React from 'react';
import style from './person-details.module.scss'

const PersonDetails = () => {
    return (
        <div className={style.container}>
            <div className={style.information}>
                <img
                    src="https://tl.vhv.rs/dpng/s/446-4460459_star-wars-emperor-palpatine-png-image-transparent-emperor.png"
                    alt=""/>
                <div className={style.description}>
                    <h4>Palpatin</h4>
                    <div> Gender: male</div>
                    <div>Birth Year: 43</div>
                    <div>Eye Color: Yellow</div>
                </div>

            </div>
        </div>
    );
};

export default PersonDetails;