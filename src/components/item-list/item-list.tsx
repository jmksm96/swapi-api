import React, {useEffect, useState} from 'react';
import api, {ResponsePeopleType} from "../../api/api";


const ItemList = () => {


    const [peopleList, setPeopleList] = useState<Array<ResponsePeopleType>>([])



    useEffect(() => {
        api.getAllPeople().then((res) => {
            setPeopleList(res.data.results)
        })
    }, [])

        return (
            <div>
                {peopleList.map(p => <div>{p.name}</div>)}
            </div>
        );

};

export default ItemList;