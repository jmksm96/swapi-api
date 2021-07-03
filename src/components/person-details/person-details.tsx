import React, {useEffect, useState} from 'react';
import style from './person-details.module.scss'
import api, {ImageType} from "../../api/api";

type PropsType = {
    name: string
    gender: string
    birthYear: string
    height: string
    hairColor: string
}


const PersonDetails: React.FC<PropsType> = (props) => {
const [img, setImg] = useState<any>()


  useEffect(() => {
      api.getPersonImg(1).then((res) => {
          setImg(res.data)
      })
  },[])

    const {name, gender, birthYear, hairColor, height} = props

    return (
        <div className={style.container}>
            <h4>{name}</h4>
            <div> Gender: {gender}</div>
            <div>Birth Year: {birthYear}</div>
            <div>Hair Color: {hairColor}</div>
            <div>Height: {height}</div>
        </div>
    );
};

export default PersonDetails;