import React, { useEffect, useState } from 'react';
import {Ul, Li, ListLink} from './itemListElements';
import Spinner from '../spinner';

const ItemList = ({getData, getPath}) => {
    const [ itemsList, setItemsList ] = useState([]);
    const [loading, setLoadind] = useState(true);
    
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
                setLoadind(false);
        })()   
    }, [getData])

    const items = renderItems(itemsList);
    if (!itemsList) return null

    return (
        loading ? <Spinner/> : (
            <>
                <Ul>
                    {items}
                </Ul>  
            </>
        )
    );

}

export default ItemList;