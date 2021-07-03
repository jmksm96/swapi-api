import React, {useEffect, useState} from 'react';
import api, {ResponsePeopleType} from "../../api/api";


const ItemList = () => {


    const [peopleList, setPeopleList] = useState<Array<ResponsePeopleType>>([])



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