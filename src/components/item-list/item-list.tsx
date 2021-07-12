import React, {useEffect, useState} from 'react';
import api, {ResponsePeopleT} from "../../api/api";


const ItemList = () => {


    const [peopleList, setPeopleList] = useState<Array<ResponsePeopleT>>([])



    useEffect(() => {
        api.getAllPerson().then((res) => {
            setPeopleList(res.data.results)
        })
    }, [])

        return (
            <div>
                {peopleList.map(p =>
                    <div onClick={() => {alert(p.name)}}>
                        {p.name}
                    </div>)}
            </div>
        );

};

export default ItemList;