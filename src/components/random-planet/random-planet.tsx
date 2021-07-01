import React, {useEffect, useState} from 'react';
import styles from './random-planet.module.scss'
import api from "../../api/api";

const RandomPlanet = () => {

    const [name, setName] = useState<string>('')
    const [id, setId] = useState<number>()
    const [population, setPopulation] = useState<string>('')
    const [rotationPeriod, setRotationPeriod] = useState<string>('')
    const [diameter, setDiameter] = useState<string>('')


    useEffect(() => {
        const id = Math.floor(Math.random() * 25 + 2);
        api.getPlanet(id).then((res) => {
            setName(res.data.name)
            setPopulation(res.data.population)
            setRotationPeriod(res.data.rotation_period)
            setDiameter(res.data.diameter)
            setId(id)
        })
    }, [])


    return (
        <div className={styles.container}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            <div className={styles.description}>
                <h4>{name}</h4>
                <div> Population: {population}</div>
                <div>Rotation Period: {rotationPeriod}</div>
                <div>Diameter: {diameter}</div>
            </div>
        </div>
    );
};

export default RandomPlanet;