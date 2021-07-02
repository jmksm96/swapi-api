import React from 'react';
import Header from "./components/header/header";
import PersonDetails from "./components/person-details/person-details";
import RandomPlanet from "./components/random-planet/random-planet";
import ItemList from "./components/item-list/item-list";


const App = () => {


    return (
        <div>
            <Header/>
            <ItemList/>
            <RandomPlanet/>
            <PersonDetails/>
        </div>
    );
};

export default App;