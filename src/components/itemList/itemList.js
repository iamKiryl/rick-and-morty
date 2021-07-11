import React, { useEffect, useState } from 'react';
import {Ul, Li} from './itemListElements';

const ItemList = ({getData}) => {
    const [ itemsList, setItemsList ] = useState([]);
    const renderItems = (arr) => {
        return arr.map(item => {
            return (
                <Li key={item.id}>{item.name}</Li>
            )
        })
    }

    // useEffect(() => {
    //     (async () => {
    //         getData().then(async items => {
    //             await setItemsList(items)
    //         })
    //     })()   
    // }, [getData])

    useEffect(() => {
        (async () => {
            const {results} = await getData();
                setItemsList(results);
        })()   
    }, [getData])


    const items = renderItems(itemsList);
    if (!itemsList) return null

    return (
        <>
            <Ul>
                {items}
            </Ul>  
        </>
    );

}

export default ItemList;