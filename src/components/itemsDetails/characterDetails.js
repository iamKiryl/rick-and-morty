import React, {useState, useEffect} from 'react';

const CharacterDetails = ({getData}) => {

    const href = `${window.location.href}`;
    const hrefArr = href.split('/');
    const l = hrefArr.length;
    const id = hrefArr[l-1];

    const [character, setCharacter] = useState('');

    useEffect(() => {
        (async () => {
            getData(id).then(item => setCharacter(item))
        })()   
    }, [getData, id])

    const {gender, name, origin, status} = character;
            
    return (
        <div>
            <div>{name}</div>
            <div>{gender}</div>
            <div>{origin}</div>
            <div>{status}</div>
        </div>
    )

}

export default CharacterDetails
