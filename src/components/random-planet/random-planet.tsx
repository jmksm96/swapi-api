import React, {useEffect, useState} from 'react';
import styles from './random-planet.module.scss'
import api from "../../api/api";
import Preloader from "../../common/components/preloader/preloader";
import styled from "styled-components";


const Error = styled.span`
color: red;
font-size: 20px;
text-align: center;
`

type StateType = {
    name: string
    population: string
    rotationPeriod: string
    diameter: string

}

const RandomPlanet = () => {

    const [state, setState] = useState<StateType>({name: '', population: '', rotationPeriod: '', diameter: ''})
    const [id, setId] = useState<number>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)


    useEffect(() => {
        const id = Math.floor(Math.random() * 25 + 2);
        api.getPlanet(id).then((res) => {
            setState({
                name: res.data.name,
                rotationPeriod: res.data.rotation_period,
                population: res.data.population,
                diameter: res.data.diameter
            })
            setId(id)
            setLoading(false)
        }).catch(() => {
            setError(true)
        })
    }, [])


    if (loading) {
        return <Preloader/>
    }

    return (
        <div className={styles.container}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            <div className={styles.description}>
                <h4>{state.name}</h4>
                <div> Population: {state.population}</div>
                <div>Rotation Period: {state.rotationPeriod}</div>
                <div>Diameter: {state.diameter}</div>
            </div>
        </div>
    );

};


export default RandomPlanet;