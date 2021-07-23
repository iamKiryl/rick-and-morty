import React, { useEffect, useState } from 'react';
import {Ul, Li, ListLink} from './itemListElements';

const ItemList = ({getData, getPath}) => {
    const [ itemsList, setItemsList ] = useState([]);
    
    const renderItems = (arr) => {
        
        return arr.map(item => {
            return (
                <Li key={item.id}><ListLink to={`${getPath}${item.id}`}>{item.name}</ListLink></Li>
            )
        })
    }

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