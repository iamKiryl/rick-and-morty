import React, {useState, useEffect} from 'react';
import Spinner from '../spinner';

const CharacterDetails = ({getData}) => {

    const href = `${window.location.href}`;
    const hrefArr = href.split('/');
    const l = hrefArr.length;
    const id = hrefArr[l-1];

    const [character, setCharacter] = useState('');
    const [loading, setLoadind] = useState(true);

    useEffect(() => {
        (async () => {
            getData(id).then(item => {
                setCharacter(item)
                setLoadind(false)
            })
        })()   
    }, [getData, id])

    const {gender, name, origin, status} = character;
            
    return (

        loading ? <Spinner/> : 
        (
            <div>
                <div>{name}</div>
                <div>{gender}</div>
                <div>{origin}</div>
                <div>{status}</div>
            </div>
        )
    
    )

}

export default CharacterDetails
