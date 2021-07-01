import React from 'react';
import Header from "./components/header/header";
import ItemList from "./components/item-list/item-list";
import PersonDetails from "./components/person-details/person-details";


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
            <ItemList/>
            <PersonDetails/>
        </div>
    );
};

export default App;