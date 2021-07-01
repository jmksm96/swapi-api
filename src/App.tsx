import React from 'react';
import Header from "./components/header/header";
import PersonDetails from "./components/person-details/person-details";
import RandomPlanet from "./components/random-planet/random-planet";


const App = () => {


    // useEffect(() => {
    //     api.getAllPeople().then((res) => {
    //         const resp = res.data
    //     })
    //     api.getPeople(3).then((res) => {
    //         console.log(res.data.name)
    //     })
    // }, [])


    return (
        <div>
            <Header/>
            <RandomPlanet/>
            <PersonDetails/>
        </div>
    );
};

export default App;