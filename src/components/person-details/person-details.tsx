import React, {useEffect, useState} from 'react';
import style from './person-details.module.scss'
import api from "../../api/api";
import logo from './../../common/assets/logo.jpg'
import {CharacterPropsType} from "../charachters/character/character";



const PersonDetails: React.FC<CharacterPropsType> = (props) => {
const [img, setImg] = useState<any>()

  useEffect(() => {
      api.getPersonImg(id).then((res) => {
          setImg(res.data)
      })
  },[])

    const {name, gender, birthYear, hairColor, height, id} = props

    return (
        <div className={style.container}>
            <div className={style.img}>
                {/*<img src={logo} alt=""/>*/}
                <img src={img} alt=""/>
            </div>

            <div className={style.details}>
                <h4>{name}</h4>
                <ul>
                    <li>Gender: {gender}</li>
                    <li>Birth Year: {birthYear}</li>
                    <li>Hair Color: {hairColor}</li>
                    <li>Height: {height}</li>
                </ul>
            </div>

        </div>
    );
};

export default PersonDetails;